import React, { MouseEventHandler } from "react"
import { cx } from "xwind"

interface TitleBarButtonProps {
    redBackground?: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
}

const TitleBarButton: React.FC<TitleBarButtonProps> = ({ redBackground, children, onClick }) => {
    const className = cx(
        "h-full w-10 m-0 p-0 flex justify-center items-center focus:outline-none " +
            "transition-all duration-150 hover:bg-black hover:bg-opacity-5",
        redBackground
            ? "hover:bg-red-500 hover:bg-opacity-100 hover:text-white"
            : "dark:hover:bg-white dark:hover:bg-opacity-5"
    )

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default TitleBarButton
