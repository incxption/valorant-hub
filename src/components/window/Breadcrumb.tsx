import React, { Fragment } from "react"
import classNames from "classnames"
import { IoIosArrowForward } from "react-icons/all"
import { History } from "history"

type Props = {
    path: PathEntry[]
    history: History
}

interface PathEntry {
    route: string
    label: string
}

const Breadcrumb: React.FC<Props> = ({ path, history }) => {
    const fullPath = [{ route: "/", label: "Valorant Hub" }, ...path]
    return (
        <div className="tracking-tight flex items-center">
            {fullPath.map(({ label, route }, index) => {
                const isLast = index === fullPath.length - 1
                return (
                    <Fragment key={label}>
                        <span
                            className={classNames(
                                "cursor-pointer",
                                isLast ? "font-semibold dark:text-white" : "text-gray-700 dark:text-gray-200"
                            )}
                            onClick={() => history.push(route)}
                        >
                            {label}
                        </span>
                        {!isLast || fullPath.length === 1 ? (
                            <IoIosArrowForward className="inline mx-1.5 text-gray-400" />
                        ) : null}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Breadcrumb
