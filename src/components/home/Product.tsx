import React from "react"
import { IconType } from "react-icons"
import { History } from "history"

type Props = {
    name: string
    description: string
    route: string
    icon: IconType
    colors: [string, string]
    history: History
}

const Product: React.FC<Props> = ({ name, description, icon: Icon, colors, route, history }) => {
    return (
        <div
            className={`w-80 h-96 bg-gradient-to-b from-${colors[0]} to-${colors[1]} flex flex-col justify-between items-center
                relative overflow-hidden text-gray-50 p-6 mx-6 rounded-xl shadow-md tracking-tight cursor-pointer`}
            onClick={() => history.push(route)}
        >
            <div>
                <h1 className="text-xl font-bold mb-2">{name}</h1>
                <p className="text-md leading-5 opacity-90">{description}</p>
                <div
                    className="mt-4 px-4 py-1.5 inline-block relative z-20 rounded-lg font-medium
                               bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
                >
                    Launch product
                </div>
            </div>
            <Icon fill="#FFFFFF" className="absolute" style={{ height: "90%", width: "90%", bottom: "-30%" }} />
            <div className={`w-full h-36 absolute z-0 bottom-0 bg-gradient-to-b from-transparent to-${colors[1]}`} />
        </div>
    )
}

export default Product
