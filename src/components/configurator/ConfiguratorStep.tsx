import React from "react"

type Props = {
    titlePrefix: string
    title: string
    description: string
}

const ConfiguratorStep: React.FC<Props> = ({ children, titlePrefix, title, description }) => {
    return (
        <div className="mx-4 mt-4">
            <h1 className="font-semibold text-xl">
                <span className="inline-block w-6 font-light text-gray-400">{titlePrefix}.</span>
                {title}
            </h1>
            <p className="text-sm -mt-1">{description}</p>
        </div>
    )
}

export { ConfiguratorStep }
