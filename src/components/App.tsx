import TitleBar from "@components/window/TitleBar"
import React, { useState } from "react"
import classNames from "classnames"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "@components/home/Home"
import Breadcrumb from "@components/window/Breadcrumb"

export default function App() {
    const [darkMode] = useState(false)

    return (
        <div className={classNames("w-full h-full transition-colors", darkMode && "dark")}>
            <TitleBar />
            <div
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                style={{ height: "calc(100% - 1.5rem)" }}
            >
                <Router>
                    <Switch>
                        <Route path="/account_manager">
                            <div className="flex-grow flex flex-col p-3">
                                <Breadcrumb path={[{ route: "/account_manager", label: "Account Manager" }]} />
                            </div>
                        </Route>
                        <Route path="/configurator">
                            <div className="flex-grow flex flex-col p-3">
                                <Breadcrumb path={[{ route: "/configurator", label: "Configurator" }]} />
                            </div>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}
