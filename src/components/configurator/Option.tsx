import React, { useState } from "react"
import classNames from "classnames"
import { motion } from "framer-motion"

type Props = {
    label: JSX.Element | string
    selected: boolean

    tooltipText?: JSX.Element | string
    enabled?: boolean
    onClick?: () => void
}

const Option: React.FC<Props> = ({ label, tooltipText, selected, enabled = true, onClick }) => {
    const [hovered, setHovered] = useState(false)

    const button = {
        selected: {
            backgroundColor: "rgb(59, 130, 246)",
            scale: 1,
            color: "white"
        },
        initial: {
            backgroundColor: "rgb(228, 228, 231)",
            color: "rgb(39, 39, 42)",
            scale: 0.95
        }
    }

    const tooltip = {
        hovered: {
            scale: 1,
            y: 0,
            opacity: 1,
            x: "-50%"
        },
        initial: { scale: 0, y: "100%", opacity: 1, x: "-50%" }
    }

    return (
        <motion.div
            variants={button}
            animate={selected ? "selected" : "initial"}
            initial="initial"
            transition={{ duration: 0.15 }}
            className={classNames(
                "inline-block bg-white mr-3 mb-3 px-2.5 py-1 rounded-md shadow-sm font-medium text-center " +
                    "cursor-pointer flex w-max items-center relative",
                selected && "shadow-md",
                !enabled && "bg-gray-200 cursor-not-allowed"
            )}
            onClick={() => enabled && onClick && onClick()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
            {tooltipText && (
                <motion.div
                    className="absolute left-1/2 -top-full w-max text-sm font-normal bg-white rounded-md px-2 py-1
                               border border-gray-200 shadow-sm z-20 text-gray-700 cursor-default"
                    variants={tooltip}
                    animate={hovered ? "hovered" : "initial"}
                    initial="initial"
                    transition={{ duration: 0.15 }}
                >
                    {tooltipText}
                </motion.div>
            )}
        </motion.div>
    )
}

export default Option
