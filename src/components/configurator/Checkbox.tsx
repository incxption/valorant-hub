import React from "react"
import classNames from "classnames"
import { IoAlertCircle, IoCheckmarkCircle } from "react-icons/all"

type Props = {
    label: string
    checked: boolean
    onClick?: () => void
}

const Checkbox: React.FC<Props> = ({ label, checked, onClick }) => {
    const Icon = checked ? IoCheckmarkCircle : IoAlertCircle

    return (
        <div
            className={classNames(
                "inline-block w-max flex items-center bg-white mr-3 pl-2 pr-2.5 py-1 rounded-md shadow-sm " +
                    "font-medium text-center cursor-pointer",
                checked && "shadow-md bg-green-500 text-white"
            )}
            style={{ minWidth: "5rem" }}
            onClick={onClick}
        >
            <Icon className={classNames("inline-block my-auto h-6 w-auto mr-1.5", !checked && "text-orange-300")} />
            {label}
        </div>
    )
}

export default Checkbox
