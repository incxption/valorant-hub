import React, { useState } from "react"
import classNames from "classnames"

type Props = {
    label: JSX.Element | string
    selected: boolean

    tooltip?: JSX.Element | string
    enabled?: boolean
    onClick?: () => void
}

const Option: React.FC<Props> = ({ label, tooltip, selected, enabled = true, onClick }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={classNames(
                "inline-block bg-white mr-3 mb-3 px-2.5 py-1 rounded-md shadow-sm font-medium text-center " +
                    "cursor-pointer flex w-max items-center relative",
                selected && "shadow-md bg-blue-500 text-white",
                !enabled && "bg-gray-200 cursor-not-allowed"
            )}
            onClick={() => enabled && onClick && onClick()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
            {tooltip && (
                <div
                    className="absolute left-1/2 -top-full w-max text-sm font-normal bg-white rounded-md px-2 py-1
                               border border-gray-200 shadow-sm z-20 transition-all text-gray-700 cursor-default"
                    style={{
                        transform:
                            (hovered ? "scale(1) translateY(0)" : "scale(0) translateY(100%)") + " translateX(-50%)",
                        opacity: hovered ? 1 : 0,
                        transformOrigin: "left"
                    }}
                >
                    {tooltip}
                </div>
            )}
        </div>
    )
}

export default Option
