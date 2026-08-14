const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('cannavisionDesktop', {
  platform: process.platform,
  version: process.versions.electron,
  sendAlert: (title, message) => ipcRenderer.send('alert', { title, message })
});
