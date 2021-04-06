import React, { useState } from "react"
import Breadcrumb from "@components/window/Breadcrumb"
import Option from "@components/configurator/Option"
import { History } from "history"
import Preparation from "@components/configurator/preparation/Preparation"
import useQuery from "../../utils/useQuery"
import Checkbox from "@components/configurator/Checkbox"
import { IoAdd } from "react-icons/all"
import classNames from "classnames"
import { motion } from "framer-motion"

type Props = {
    history: History
}

type Query = {
    preparation?: string
}

const sampleFiles = [{ name: "Default Configuration" }, { name: "Juli's Settings" }, { name: "Joshi's Valo Config" }]

const Configurator: React.FC<Props> = ({ history }) => {
    const { preparation } = useQuery<Query>()

    const [files] = useState(sampleFiles)

    const [selectedFile, setSelectedFile] = useState(0)
    const [readMode, setReadMode] = useState(true)
    const [isPrepared, setIsPrepared] = useState(false)

    if (preparation) {
        return <Preparation history={history} />
    }

    return (
        <div className="h-full w-full flex flex-col p-3 tracking-tight overflow-x-hidden">
            <Breadcrumb history={history} path={[{ route: "/configurator", label: "Configurator" }]} />
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                <div className="mx-4 mt-4">
                    <h1 className="font-semibold text-xl">
                        <span className="inline-block w-6 font-light text-gray-400">1.</span>
                        File
                    </h1>
                    <p className="text-sm -mt-1">
                        Select the file in which the Valorant settings are/should be stored.
                    </p>
                    <div className="mt-3 flex justify-start flex-wrap">
                        {files.map((file, index) => (
                            <Option
                                key={index}
                                label={file.name}
                                selected={selectedFile === index}
                                onClick={() => setSelectedFile(index)}
                            />
                        ))}
                        <Option
                            label={
                                <IoAdd
                                    className={classNames(
                                        "inline w-5 h-5",
                                        selectedFile === -1 ? "text-white" : "text-blue-500"
                                    )}
                                />
                            }
                            selected={selectedFile === -1}
                            onClick={() => {
                                setSelectedFile(-1)
                                setReadMode(true)
                            }}
                            tooltip="Create new file on run"
                        />
                    </div>
                </div>
                <div className="mx-4 mt-6">
                    <h1 className="font-semibold text-xl">
                        <span className="inline-block w-6 font-light text-gray-400">2.</span>
                        Mode
                    </h1>
                    <p className="text-sm -mt-1">
                        Should the configurator read the settings from or write them into Valorant?
                    </p>
                    <div className="mt-3 flex">
                        <Option
                            label="Extract from Valorant"
                            tooltip="Scan settings and save to file"
                            selected={readMode}
                            onClick={() => setReadMode(true)}
                        />
                        <Option
                            label="Insert into Valorant"
                            tooltip={
                                selectedFile !== -1
                                    ? "Apply settings from file"
                                    : "Not allowed when creating a new file"
                            }
                            enabled={selectedFile !== -1}
                            selected={!readMode}
                            onClick={() => setReadMode(false)}
                        />
                    </div>
                </div>
                <div className="mx-4 mt-6">
                    <h1 className="font-semibold text-xl">
                        <span className="inline-block w-6 font-light text-gray-400">3.</span>
                        Preparation
                    </h1>
                    <p className="text-sm -mt-1">Prepare your game for the configurator to work correctly.</p>
                    <div className="mt-3">
                        <Checkbox
                            label="Go through the tutorial"
                            checked={isPrepared}
                            onClick={() => {
                                history.push("/configurator?preparation=true")
                                setIsPrepared(true)
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Configurator
