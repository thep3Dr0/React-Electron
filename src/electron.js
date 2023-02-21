const {app,BrowserWindow} = require("electron")

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height:600
    })

    window.loadFile("./App.js")
}

app.whenReady().then(()=>{
    createWindow()
})