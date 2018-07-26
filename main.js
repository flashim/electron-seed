const windowManager = require('electron-window-manager');
const electron = require('electron');
const app = electron.app;

const path = require('path')
const url = require('url')

var mainWindow;

function open_LABCW_Window() {

  // Open a window
  mainWindow = windowManager.createNew('mainWin', 'LABCW', url.format({
    pathname: path.join(__dirname, '/app/index.html'),
    protocol: 'file:',
    slashes: true
  }), false, {
    'show': false,
    'width': 1280,
    'height': 720,
    'center': true,
    'frame': false,
    'useContentSize': true,
    'showDevTools': false,
    'fullscreen': true,
    'webPreferences': {
      'webSecurity': false
    }
  });

  mainWindow.open();
}

app
  .on('ready', function () {

    open_LABCW_Window();

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', function () {})

  })

// Quit when all windows are closed.