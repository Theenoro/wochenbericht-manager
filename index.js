const {
    app,
    BrowserWindow,
    Menu,
    dialog,
    ipcMain
}         = require('electron');
const fs  = require('fs');

var win ;
// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      app.quit();
      return true;
  }
};
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
