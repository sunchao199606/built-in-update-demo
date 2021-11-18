/**
 * @Description:
 * @Author: mockingbird
 * @Date: 2021/11/18 13:59
 */
const {app, autoUpdater, BrowserWindow} = require('electron')

app.on('ready', () => {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.loadURL(`file://${__dirname}/main.html#${app.getVersion()}`)
})
