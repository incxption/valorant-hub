import { app, BrowserWindow } from "electron"
import * as path from "path"
import * as isDev from "electron-is-dev"
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer"

let window: BrowserWindow | null = null

async function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 600,
        minHeight: 450,
        webPreferences: {
            nodeIntegration: false,
            preload: __dirname + "/preload.js",
            contextIsolation: false,
            enableRemoteModule: true
        },
        show: false,
        icon: "public/favicon.png",
        autoHideMenuBar: true,
        title: "Inception Hub",
        frame: false
    })

    if (isDev) {
        await window.loadURL("http://localhost:3000/index.html")
    } else {
        // 'build/index.html'
        await window.loadURL(`file://${__dirname}/../index.html`)
    }

    window.on("closed", () => (window = null))

    // Hot Reloading
    if (isDev) {
        // 'node_modules/.bin/electronPath'
        require("electron-reload")(__dirname, {
            electron: path.join(__dirname, "..", "..", "node_modules", "electron", "dist", "electron.exe"),
            forceHardReset: true,
            hardResetMethod: "exit"
        })
    }

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log("Added xtension:", name))
        .catch((err) => console.log("An error occurred:", err))

    window.show()
    if (isDev) {
        window.setAlwaysOnTop(true)
        window.focus()
        window.setAlwaysOnTop(false)
    }
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", async () => {
    if (window === null) {
        await createWindow()
    }
})
