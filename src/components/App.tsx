import TitleBar from "@components/window/TitleBar"
import React, { useState } from "react"
import classNames from "classnames"
import { Switch, Route, useLocation } from "react-router-dom"
import Home from "@components/home/Home"
import Configurator from "@components/configurator/Configurator"
import { AnimatePresence } from "framer-motion"

export default function App() {
    const [darkMode] = useState(false)
    const location = useLocation()

    return (
        <div className={classNames("w-full h-full transition-colors", darkMode && "dark")}>
            <TitleBar />
            <div
                className="bg-gray-100 flex dark:bg-gray-800 text-gray-800 dark:text-gray-100 overflow-auto"
                style={{ height: "calc(100% - 1.5rem)" }}
            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    <Switch location={location} key={window.location.pathname}>
                        <Route path="/configurator" component={Configurator} />
                        <Route path="/" component={Home} />
                    </Switch>
                </AnimatePresence>
            </div>
        </div>
    )
}
