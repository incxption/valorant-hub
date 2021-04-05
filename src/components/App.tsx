import TitleBar from "@components/window/TitleBar"
import React, { useState } from "react"
import classNames from "classnames"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "@components/home/Home"
import Configurator from "@components/configurator/Configurator"

export default function App() {
    const [darkMode] = useState(false)

    return (
        <div className={classNames("w-full h-full transition-colors", darkMode && "dark")}>
            <TitleBar />
            <div
                className="bg-gray-100 flex dark:bg-gray-800 text-gray-800 dark:text-gray-100 overflow-auto"
                style={{ height: "calc(100% - 1.5rem)" }}
            >
                <Router>
                    <Switch>
                        <Route path="/configurator" component={Configurator} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}
