const {
    app,
    BrowserWindow,
    Menu,
    dialog,
    ipcMain
}         = require('electron');
const fs  = require('fs');

var win ;
// APP WINDOW
app.on('ready', () => {
    win = new BrowserWindow({
        width: 1010,
        height: 800,
        minWidth: 1010,
        minHeight: 565,
        show: false,
        frame: false
    })
    win.loadURL(`file://${__dirname}/app/view/layout.html`)
    win.once('ready-to-show', () => {
        win.show()
        // DEV
        //win.webContents.openDevTools()
    })
    win.on('closed', () => {
      app.quit();
    })
})

// PRINT COMMAND
ipcMain.on('print', (event, arg) => {
  var html = arg.html;
  // SCRIPT TO LET THE PROCESS KNOW WHEN ITS FULLY LOADED
  html += `
    <script>
      const {ipcRenderer} = require('electron');
      ipcRenderer.send('finLoad', {})

    </script>

  `
  var webviewurl = 'data:text/html;charset=utf-8,'+html;

  var pdfWin = new BrowserWindow({
    width: 1000,
    height: 800,
    show: false,
    parent: win
  });

  // FULLY LOADED
  ipcMain.once('finLoad',(events,args)=>{
    let contents = pdfWin.webContents;
    contents.printToPDF({pageSize:"A4"},(err,buffer)=>{
      var wstream = fs.createWriteStream(arg.path);
      wstream.write(buffer);
      wstream.end();
      pdfWin = null;
      event.sender.send('print', 'fin')
    })
  })
  pdfWin.loadURL(webviewurl);
})
