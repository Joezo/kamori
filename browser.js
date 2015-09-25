'use strict';
const ipc = require('ipc');

ipc.on('show-notification-preferences', () => {
  document.querySelector('#side > header > div.pane-list-controls > div > span > div:nth-child(2) > button').click();
  document.querySelector('#side > header > div.pane-list-controls > div > span > div.menu-item.active > span > div > ul > li:nth-child(3) > a').click();
});

ipc.on('new-conversation', () => {
  document.querySelector('#side > header > div.pane-list-controls > div > span > div:nth-child(1) > button').click();
});

ipc.on('new-group', () => {
  document.querySelector('#side > header > div.pane-list-controls > div > span > div:nth-child(2) > button').click();
	document.querySelector('#side > header > div.pane-list-controls > div > span > div.menu-item.active > span > div > ul > li:nth-child(1) > a').click();
});

ipc.on('log-out', () => {
  document.querySelector('#side > header > div.pane-list-controls > div > span > div:nth-child(2) > button').click();
  document.querySelector('#side > header > div.pane-list-controls > div > span > div.menu-item.active > span > div > ul > li:nth-child(5) > a').click();
});
