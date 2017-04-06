const {ipcRenderer,shell} = require('electron')
const {dialog}   = require('electron').remote
const remote     = require('electron').remote
const Datastore  = require('nedb');
const moment     = require('moment');
const uuidV1     = require('uuid/v1');
const Handlebars = require('handlebars');
const fs         = require('fs');
const nunjucks   = require('nunjucks');
const Chance     = require('chance');
const rwc        = require('random-weighted-choice');
const template   = require('./../assets/templates/blanko.js');

var chance = new Chance();
nunjucks.configure('views', { autoescape: true });

var db = null;
var days = ['monday','tuesday','wednesday','thursday','friday'];
var gDays= ['Montag','Dienstag','Mittwoch','Donnserstag','Freitag'];

// BUTTONS AND STUFF
const $body         = $('body');
const $loadDB       = $('#loaddb');
const $newDB        = $('#newdb');
const $reportSave   = $('#reportSave');
const $report       = $('#report');
const $reportCreate = $('#reportCreate');
const $reportReset  = $('#reportReset');
const $reportDelete = $('#reportDelete');
const $reportLoad   = $('.entry')
const $printSingle  = $('#printSingle');
const $reportAsTemplate = $('#reportAsTemplate');
const $close        = $('.closeWin');

// SETTINGS

const $settings     = $('#settings');
const $saveSettings = $('#settings #saveSettings')

const $enext = $('#enext');
const $eback = $('#eback');

var this_week = null;
var useWeekAsTemplate = null;
var cpage = 0;
var settings = null;
var this_template = {};

// Templates
const $tmp_entry    = Handlebars.compile($("#entry-template").html());
const $tmp_alert    = Handlebars.compile($("#alert-template").html());
const $tmp_zt_task    = Handlebars.compile($("#zt-task").html());
const $tmp_zt_tvn    = Handlebars.compile($("#zt-tvn").html());
const $tmp_tmp       = Handlebars.compile($('#template-template').html())


/** CLOSE BUTTON */
$close.click(()=>{
  var windows = remote.getCurrentWindow();
  windows.close();
  remote.app.quit();
})

/**
 * load file database
 */
$loadDB.click(function(){
    dialog.showOpenDialog({
        filters: [{
            name: 'WBM',
            extensions: ['wbm']
        }]
    },(filename)=>{
        console.log(filename)
        if(filename != ""){
          db = new Datastore({
              filename: filename[0],
              autoload: true
          });
          new alert('Datei geladen','fa fa-plus','success')
          // LOAD SETTINGS
          db.find({ flag: 'settings' }, function (err, docs) {
            settings = docs[0].settings;
            updateFromSettings()
            loadEntrys();
          });

        }
    });
})

/**
 * CREATE NEW FILE
 */
$newDB.click(()=>{
    dialog.showSaveDialog({
        filters: [{
            name: 'WBM',
            extensions: ['wbm']
        }]
    },(path)=>{
        if(path === ""){
          new alert('Kein Pfad angegeben','fa fa-hdd-o','warning')
        }else{
          db = new Datastore({
              filename: path,
              autoload: true
          });
          db.remove({}, { multi: true }, function (err, numRemoved) {
            settings = new csettings();
            db.insert({flag:'settings',settings:settings},()=>{
              loadEntrys()
              updateFromSettings()
            })

          });
        }
    })
})

/**
 * LOAD ENTRYS
 */
var loadEntrys = (page)=>{
  if(typeof page == "undefined"){
    page = 1
  }
  cpage = page;
  var fe = page * 20 - 20;
  var le = page * 20;
  // LOAD ALL ENTRYS
  db.find({flag:'report'}).sort({ start: -1 }).exec((err,docs)=>{
    db.count({flag:'report'}, function (err, count) {
      $('#ae').text(count);
    });
    $('#reportList').html('');
    $('#fe').text(fe+1);
    $('#le').text(le);
    console.log(docs)
    var doc = null;
    for(doc in docs){
      var html = $tmp_entry(docs[doc])
      $('#reportList').append(html)
    }
  })
}
$enext.click(()=>{
  console.log('X')
  cpage++;
  loadEntrys(cpage);
})
$eback.click(()=>{
  cpage--;
  loadEntrys(cpage);
})

$('.lg-side .main-win.tab-pane').hide(0);
$('.lg-side .main-win.tab-pane.active').show(200);


$('#tab-loader a').click(function (e) {
  e.preventDefault()
  $('.lg-side .main-win.tab-pane').hide(0).removeClass('active');
  $($(this).attr('href')).show().addClass('active');
})

$('.mail-group-checkbox').change(function(){
  var stat = $('.mail-group-checkbox').is(":checked")
  console.log('check'+stat)
  if($('.mail-group-checkbox').is(":checked")){
    $('.mail-checkbox').attr('checked',true);
  }else{
    $('.mail-checkbox').attr('checked',false);
  }
})
/**
 * REPORT
 */
$body.delegate('.task .delete', 'click', function() {
    $(this).parent().parent().remove();
});
$body.delegate('.addtask .add', 'click', function() {
    $(this).parent().parent().parent().parent().before('<div class="row">      <div class="col-md-12">        <div class="input-group task">          <input type="text" class="daystasks form-control" placeholder="Tätigkeit">          <span class="input-group-btn">            <button class="btn btn-danger delete" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>          </span></div></div></div>');
})
$reportCreate.click(()=>{
  $reportReset.click();
  if(db === null){
    new alert('Keine Datei geladen!','fa fa-exclamation-triangle','danger');
  }
  this_week = new week();
})
$reportAsTemplate.click(()=>{
  if($reportAsTemplate.attr('data-bool')=="true"){
    $reportAsTemplate.html('<i class="fa fa-square-o" aria-hidden="true"></i> ');
    $reportAsTemplate.attr('data-bool','false');
    this_week.istemplate = "false";
  }else{
    $reportAsTemplate.html('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
    $reportAsTemplate.attr('data-bool','true');
    this_week.istemplate = "true";
  }
})
$reportSave.click(()=>{
  var istemplate = false;
  if(this_week != null){
    istemplate = this_week.istemplate;
  }
  this_week = new week();
  this_week.istemplate = istemplate;
  this_week.start = $('#startDate').val();
  this_week.end = $('#endDate').val()
  if($('#uuid').val() != ""){
    this_week._id = $('#uuid').val();
  }
  var day = null;
  for(day in days){
    var tasks = [];
    $('#'+days[day]+' #start').val();
    $('#'+days[day]+' #end').val();
    $('#'+days[day]+' #break').val();
    // $('#monday .daystasks').each(function(){console.log($(this).val())})
    for(var i=0;i<$('#'+days[day]+' .daystasks').length;i++){
      tasks.push($('#'+days[day]+' .daystasks:nth('+(i)+')').val());
    }

    this_week.days[days[day]] = {
      start: $('#'+days[day]+' .start').val(),
      end  : $('#'+days[day]+' .end').val(),
      break: $('#'+days[day]+' .break').val(),
      tasks: tasks
    }
  }
  if(db === null){
    new alert('Keine Datei geladen!','fa fa-exclamation-triangle','danger');
    this_week = null;
    $reportReset.click();
  }else{
    new alert('Gespeichert','fa fa-hdd-o','success');
    if($('#uuid').val() != ""){
      db.update({ _id: this_week._id }, { $set: this_week}, { multi: false }, function (err, numReplaced) {
          loadEntry(this_week._id)
          loadEntrys()
      });
    }else{
      db.count({},(err, count)=>{
        this_week.id = count;
        db.insert(this_week,(err, newDoc)=>{
          loadEntry(newDoc._id);
          loadEntrys()

        });
      });
    }
  }
})
$reportReset.click(()=>{
  $('#uuid').val("");
})
$reportDelete.click(()=>{
  if(typeof this_week._id != "undefined"){
    db.remove({ _id: this_week._id }, {}, function (err, numRemoved) {
      loadEntrys();
      $('#report > div > form > div > div.modal-header > button').click();
    });
  }else{
    $reportReset.click();
  }
})
/**
 * OPEN REPORT
 */
$body.delegate('#home .entry','click',(event)=>{
  var id = $(event.target).attr('data-id');
  loadEntry(id);
});

/*
$body.delegate('#tasks .entry','click',(event)=>{
  var id = $(event.target).attr('data-id');

});
*/
/**
 * OPEN ENTRY AS TEMPLATE
 */
$body.delegate('#tmpSelect .entry','click',(event)=>{
  var id = $(event.target).attr('data-id');
  db.find({ _id: id }).exec(function (err, docs) {
    this_template.week = docs[0];
    new alert("Template gewählt!",'fa fa-check','success');
  });
  //new alert(id);
});
$('#openSelectTmp').click(()=>{
  $('#tmpSelect').html("");
  if(db === null){
    $('#tmpSelect').html(`<div class="alert alert-danger" role="alert">
    <i class="fa fa-exclamation" aria-hidden="true"></i>
    Bitte Datei laden / neu erstellen.
    </div>`);
    return;
  }
  db.find({flag:'report',istemplate:"true"},(err)=>{
    if(err === true){
      $('#tmpSelect').html(`<div class="alert alert-danger" role="alert">
      <i class="fa fa-exclamation" aria-hidden="true"></i>
      Keine Template gefunden. Einfach auf "Erstellen" drücken und als Template einstellen.
      </div>`);
    }else{
      db.find({flag:'report',istemplate:"true"}).sort({ start: -1 }).exec((err,docs)=>{
        console.log('TEST')
        $('#tmpSelect').html('<table id="tmptable" class="table table-inbox table-hover"></table>');
        for(doc in docs){
          var html = $tmp_tmp(docs[doc])
          $('#tmptable').append(html)
        }
      });


    }
  })
});
$printSingle.click(()=>{
  $reportSave.click();
  //var html = fs.readFileSync(`file://${__dirname}/ressources/app.asar/app/assets/templates/blanko.html`, 'utf8');
  var html = template[0]+template[1];
  var options = { format: 'Letter' };
  var path = "";
  dialog.showSaveDialog({
      filters: [{
          name: 'pdf',
          extensions: ['pdf']
      }]
  },(path)=>{
      new alert('PDF erstellen!','fa fa-exclamation-triangle','info');
      if(path === ""){
        new alert('Pfad ist leer!','fa fa-exclamation-triangle','danger');
      }else{
        //console.log(JSON.parse(JSON.stringify(this_week)));
        var template = nunjucks.compile(html);
        html = template.render({ week: JSON.parse(JSON.stringify(this_week)),test:JSON.stringify(JSON.stringify(this_week)),num: moment(moment(this_week.start).diff(moment(settings.startDate,"YYYY-MM-DD"))).format("W"),name:settings.name});

        //new alert("WATT",'fa fa-exclamation-triangle','danger');
        //new alert(path,'fa fa-exclamation-triangle','danger')
        ipcRenderer.send('print', {path:path,html:html})
        ipcRenderer.on('print', (event, arg) => {
          new alert("Fertig!",'fa fa-check','success');
        })
      }
  })
})

function loadEntry(id){
  db.find({ _id: id }).exec(function (err, docs) {
    // docs is [doc1, doc3, doc2]
    console.log(docs)
    $reportReset.click();
    $reportCreate.click();
    // LOAD
    this_week = new week();
    this_week = docs[0];
    var a  = new Date(this_week.start);
    var b = new Date(settings.startDate);
    $('#number').val(Math.ceil((a-b)/ 604800000)+1);
    //$('#number').val(moment(moment(this_week.start).diff(moment(settings.startDate,"YYYY-MM-DD"))).format("W"));
    $('#startDate').val(this_week.start);
    $('#endDate').val(this_week.end);
    $('#uuid').val(this_week._id);
    var day = null;
    for(day in days){
      var d = days[day];
      console.log(d+' '+day)
      $('#'+d+' .start').val(this_week.days[d].start);
      $('#'+d+' .end').val(this_week.days[d].end);
      $('#'+d+' .break').val(this_week.days[d].break);
      for(var i = 0; i<this_week.days[d].tasks.length;i++){
        if(i != this_week.days[d].tasks.length){
          $('#'+d+' .addtask .add').click();
          $('#'+d +' .daystasks:nth('+i+')').val(this_week.days[d].tasks[i]);

        }
      }
    }
    $('.daystasks').each(function(){
      if($(this).val() === ""){
        console.log('REM');
        $(this).parent().parent().parent().remove();
      }
    })
    if(this_week.istemplate == "true"){
      $reportAsTemplate.html('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
      $reportAsTemplate.attr('data-bool','true');
      this_week.istemplate = "true";
    }else{
      $reportAsTemplate.html('<i class="fa fa-square-o" aria-hidden="true"></i> ');
      $reportAsTemplate.attr('data-bool','false');
      this_week.istemplate = "false";
    }
  });
}
// settings

$saveSettings.click(()=>{
  if(db === null){
    new alert('Keine Datei geladen!','fa fa-exclamation-triangle','danger');
    return;
  }
  settings.name = $('#realname').val();
  settings.startDate = $('#sstartDate').val();

  db.update({ flag: 'settings' }, { settings : settings,flag:'settings' } , {}, function () {
    updateFromSettings()
    new alert('Einstellungen gespeichert!','fa fa-exclamation-triangle','success');
  });

})

function updateFromSettings(){
  $('#yourName').text(settings.name);
  $('#realname').val(settings.name);
  $('#sstartDate').val(settings.startDate)
}

// ZT
//
$('#printAll').click(()=>{
  var i = $('.mail-checkbox:checked').length;
  var ids = [];
  for(var y = 0;y<i;y++){
    var id = $('.mail-checkbox:checked:nth('+y+')').attr('data-id');
    ids.push({_id:id});
  }
  console.log(ids)
  db.find({ $or: ids }, function (err, docs) {
    console.log(docs);

    for(doc in docs){
      var a  = new Date(docs[doc].start);
      var b = new Date(settings.startDate);
      docs[doc].id = Math.ceil((a-b)/ 604800000)+1;
      //docs[doc].id = parseInt(moment(moment(docs[doc].start).diff(moment(settings.startDate,"YYYY-MM-DD"))).format("W"));
    }

    docs.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );
    console.log(docs);
    var html = template[1];
    var options = { format: 'Letter' };
    var path = "";
    dialog.showSaveDialog({
        filters: [{
            name: 'pdf',
            extensions: ['pdf']
        }]
    },(path)=>{
        new alert('PDF erstellen!','fa fa-exclamation-triangle','success');
        if(path === ""){
          new alert('Pfad ist leer!','fa fa-exclamation-triangle','danger');
          return;
        }else{
          //console.log(JSON.parse(JSON.stringify(this_week)));
          var template2 = nunjucks.compile(html);
          var html2 = "";
          html2 += template[0];
          for(doci in docs){
            var doc = docs[doci]
            var a  = new Date(doc.start);
            var b = new Date(settings.startDate);
            var weeks = Math.ceil((a-b)/ 604800000)+1;
            html2 += template2.render({ week: JSON.parse(JSON.stringify(doc)),test:JSON.stringify(JSON.stringify(doc)),num: weeks,name:settings.name});
            html2 += '<div class="" style="page-break-before:always;"></div>'
          }
        //  new alert("WATT",'fa fa-exclamation-triangle','danger');
          //new alert(path,'fa fa-exclamation-triangle','danger')
          ipcRenderer.send('print', {path:path,html:html2})
          ipcRenderer.on('print', (event, arg) => {
            new alert("Fertig!",'fa fa-check','success');
          })
        }
    })
  });
})


$('#zt-gen').click(()=>{
  if(db === null){
    new alert('Kann nicht generiert werden da keine Datei geladen wurde!','fa fa-exclamation-triangle','danger');
    return;
  }
  var z = $('.zt-week-random').length;
  var tasks = [];
  for(var i = 0;i<z;i++){
    var task = $('.zt-week-random:nth('+i+') .zt-week-random-task').val();
    var m    = $('.zt-week-random:nth('+i+') .zt-week-random-task-h').val();
    tasks.push({weight:m,id:task});
  }
  var zy = $('.zt-tvn-c').length;
  var tvn = [];
  for(var i = 0;i<zy;i++){
    var task = $('.zt-tvn-c:nth('+i+') .zt-tvn-num').val();
    var m    = $('.zt-tvn-c:nth('+i+') .zt-tvn-weight').val();
    tvn.push({weight:m,id:task});
  }
  var days = {
    monday: $('#zt-week-0')[0].checked,
    tuesday: $('#zt-week-1')[0].checked,
    wednesday: $('#zt-week-2')[0].checked,
    thursday: $('#zt-week-3')[0].checked,
    friday: $('#zt-week-4')[0].checked
  }

  //var x = moment(moment($('#zt-endDate').val()).diff(moment($('#zt-startDate').val(),"YYYY-MM-DD"))).format("W") - 1;
  var a  = new Date($('#zt-endDate').val());
  var b = new Date($('#zt-startDate').val());
  var x = Math.ceil((a-b)/ 604800000)+1;

  console.log(x);
  console.log(tasks);
  console.log(days);
  console.log(tvn)
  var tweeks = [];
  for(var i = 0; i<x;i++){
    console.log("w")
    var tw = new week();
    for(day in days){
      console.log('d'+day);
      if(days[day] == true){
        var dt = [];
        var c = 0;
        var u = 0;
        var m = chance.integer({min: 3, max: 5});
        var tvx = 0;
        m = "";
        tvn = chance.shuffle(tvn);
        while(m == ""){
          if(tvx>=zy){
            tvx=0;
          }
          var r = chance.d100();
          console.log(" TVX "+tvx)
          if(tvn[tvx].weight<r){
            m = tvn[tvx].id;
          }
          tvx++;
        }
        console.log("M"+m)
        while(c<m || dt.length<m){
          tasks = chance.shuffle(tasks);
          for(ta in tasks){
            var r = chance.d100();
            if(parseInt(tasks[ta].weight) > r){

              if(dt.indexOf(tasks[ta].id)>-1){

              }else{
                console.log(tasks[ta]);
                dt.push(tasks[ta].id)
                c++;
                break;
              }
            }
          }
          u++;
        }
        console.log(dt);
        tw.days[day].tasks = dt;

      }else{
        tw.days[day].tasks = this_template.week.days[day].tasks;
      }
      console.log(tw);
      tw.days[day].start = this_template.week.days[day].start;
      tw.days[day].end = this_template.week.days[day].end;
      tw.days[day].break = this_template.week.days[day].break;
    }
    tw.start =  moment($('#zt-startDate').val()).add(7*i,'d').format('YYYY-MM-DD');
    tw.end   = moment(tw.start).add(6,'d').format('YYYY-MM-DD')

    tweeks.push(tw);
  }
  console.log(tweeks);
  db.insert(tweeks, function (err) {
    loadEntrys()
  });
})
$('#zt-add-task').click(()=>{
  var html = $tmp_zt_task();
  $('.zt-week-random-dis').before(html)
})
$('.add-tvn-this').click(()=>{
  var html = $tmp_zt_tvn();
  $('.tnv-dis').before(html)
})
$body.delegate('.zt-rem-task','click',function(){
  console.log('TEST')
  $(this).parent().parent().remove();
})
$body.delegate('.del-tvn-this','click',function(){
  $(this).parent().parent().remove();
})
// ---------------------------------------------------------




class csettings{
  constructor(){
    this.name = ""
    this.startDate = ""
  }
}
/**
 *
 *  ENTRY
 *
 */
class week{
  constructor(){
    this.uuid = uuidV1();
    this.id = 0;
    this.start = "";
    this.end = "";
    this.istemplate = "false";
    this.flag = "report";
    this.days = {
      monday :{
          start: '',
           end: '',
           break: '',
           tasks: []
      },
      tuesday :{
         start: '',
          end: '',
          break: '',
          tasks: []
      },
      wednesday :{
          start: '',
           end: '',
           break: '',
           tasks: []
       },
       thursday:{
         start: '',
          end: '',
          break: '',
          tasks: []
       },
       friday :{
          start: '',
           end: '',
           break: '',
           tasks: []
       },
    }
  }
}

class alert{
  constructor(text,icon,type){
    this.text = text;
    this.icon = icon;
    this.type = type;
    this.uuid = uuidV1();
    switch(this.type){
      case "success":
        this.type = 'update-success';
        break;
      case "danger":
        this.type = 'update-danger';
        break;
      case "info":
        this.type = 'update-info';
        break;
      default:

    }
    var html = $tmp_alert({icon:this.icon,text:this.text,auuid:this.uuid,type:this.type})
    console.log("TEXT");
    console.log(html)
    $(html).appendTo('#alertbox').css('display','none').slideDown('slow')
    setTimeout(()=>{
      $('.'+this.uuid).slideUp( "slow", ()=>{
        //$('.'+this.uuid).remove();
      });
    },10000)

  }
}



/**
 * LINKS
 */
$('body').delegate('a','click',function(e){
  var url = $(this).attr('href');
  console.log(url)
  if(url.substring(0,1) != '#'){
    shell.openExternal($(this).attr('href'))
    e.preventDefault();
  }
});
