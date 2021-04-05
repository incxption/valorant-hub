import React from "react"
import { IoBrowsersOutline, IoIosClose, IoIosRemove } from "react-icons/all"
import TitleBarButton from "@components/window/TitleBarButton"

import "@styles/title-bar.css"
import { ReactComponent as Logo } from "@assets/logo.svg"

const {
    remote: { BrowserWindow }
} = window.require("electron")

const TitleBar: React.FC = () => {
    const minimize = () => BrowserWindow.getFocusedWindow()?.minimize()
    const maximize = () => {
        const window = BrowserWindow.getFocusedWindow()
        window?.isMaximized() ? window?.unmaximize() : window?.maximize()
    }
    const close = () => BrowserWindow.getFocusedWindow()?.close()

    return (
        <div
            id="title-bar"
            className="h-6 w-full flex items-center justify-between text-sm transition-colors
            bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200"
        >
            <div className="flex flex-row items-center h-full ml-1.5">
                <Logo className="h-4 w-4" />
                <div className="ml-2 font-medium tracking-tight">Valorant Hub</div>
            </div>
            <div id="title-bar-buttons" className="h-full flex flex-row">
                <TitleBarButton onClick={minimize}>
                    <IoIosRemove size="1.8em" />
                </TitleBarButton>
                <TitleBarButton onClick={maximize}>
                    <IoBrowsersOutline size="0.9em" />
                </TitleBarButton>
                <TitleBarButton onClick={close} redBackground>
                    <IoIosClose size="1.8em" />
                </TitleBarButton>
            </div>
        </div>
    )
}

export default TitleBar
