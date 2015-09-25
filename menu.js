'use strict';
const os = require('os');
const app = require('app');
const Menu = require('menu');
const BrowserWindow = require('browser-window');
const shell = require('shell');
const appName = app.getName();

function sendAction(action) {
  BrowserWindow.getFocusedWindow().webContents.send(action);
}

const tpl = [
  {
    label: appName,
    submenu: [
      {
        label: `About ${appName}`,
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: 'Notification preferences...',
        accelerator: 'Cmd+,',
        click() {
          sendAction('show-notification-preferences');
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Log Out',
        click() {
          sendAction('log-out');
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Services',
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        label: `Hide ${appName}`,
        accelerator: 'Cmd+H',
        role: 'hide'
      },
      {
        label: 'Hide Others',
        accelerator: 'Cmd+Shift+H',
        role: 'hideothers'
      },
      {
        label: 'Show All',
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        label: `Quit ${appName}`,
        accelerator: 'Cmd+Q',
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'New Conversation',
        accelerator: 'CmdOrCtrl+N',
        click() {
          sendAction('new-conversation');
        }
      },
      {
        label: 'New Group',
        accelerator: 'CmdOrCtrl+G',
        click() {
          sendAction('new-group');
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      }
    ]
  },
  {
    label: 'Window',
    role: 'window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        role: 'front'
      }
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'Website',
        click() {
          shell.openExternal('https://github.com/joezo/kamori');
        }
      },
      {
        label: 'Report Issue',
        click() {
          const body = `
**Please succinctly describe your issue and steps to reproduce it.**

-

${app.getName()} ${app.getVersion()}
${process.platform} ${process.arch} ${os.release()}`;

          shell.openExternal(`https://github.com/joezo/kamori/issues/new?body=${encodeURIComponent(body)}`);
        }
      }
    ]
  }
];

module.exports = Menu.buildFromTemplate(tpl);
