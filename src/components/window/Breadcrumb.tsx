import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { IoIosArrowForward } from "react-icons/all"

type Props = {
    path: PathEntry[]
}

interface PathEntry {
    route: string
    label: string
}

const Breadcrumb: React.FC<Props> = ({ path }) => {
    const fullPath = [{ route: "/", label: "Valorant Hub" }, ...path]
    return (
        <div className="tracking-tight flex items-center">
            {fullPath.map(({ label, route }, index) => {
                const isLast = index === fullPath.length - 1
                return (
                    <>
                        <Link to={route}>
                            <span className={classNames(isLast ? "font-semibold" : "text-gray-700")}>{label}</span>
                        </Link>
                        {!isLast || fullPath.length === 1 ? (
                            <IoIosArrowForward className="inline mx-1.5 text-gray-400" />
                        ) : null}
                    </>
                )
            })}
        </div>
    )
}

export default Breadcrumb
