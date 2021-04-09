import React, { useState } from "react"
import Breadcrumb from "@components/window/Breadcrumb"
import Option from "@components/configurator/Option"
import { History } from "history"
import Preparation from "@components/configurator/preparation/Preparation"
import useQuery from "@utils/useQuery"
import Checkbox from "@components/configurator/Checkbox"
import { IoAdd } from "react-icons/all"
import classNames from "classnames"
import PageTransition from "@components/PageTransition"
import ConfiguratorStep from "./ConfiguratorStep"

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
        return (
            <PageTransition className="h-full w-full">
                <Preparation history={history} />
            </PageTransition>
        )
    }

    return (
        <div className="h-full w-full flex flex-col p-3 tracking-tight overflow-x-hidden">
            <Breadcrumb history={history} path={[{ route: "/configurator", label: "Configurator" }]} />
            <PageTransition>
                <ConfiguratorStep
                    titlePrefix="1"
                    title="File"
                    description="Select the file in which the Valorant settings are/should be stored."
                >
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
                            tooltipText="Create new file on run"
                        />
                    </div>
                </ConfiguratorStep>
                <ConfiguratorStep
                    titlePrefix="2"
                    title="Mode"
                    description="Should the configurator read the settings from or write them into Valorant?"
                >
                    <div className="mt-3 flex justify-start flex-wrap">
                        <Option
                            label="Extract from Valorant"
                            tooltipText="Scan settings and save to file"
                            selected={readMode}
                            onClick={() => setReadMode(true)}
                        />
                        <Option
                            label="Insert into Valorant"
                            tooltipText={
                                selectedFile !== -1
                                    ? "Apply settings from file"
                                    : "Not allowed when creating a new file"
                            }
                            enabled={selectedFile !== -1}
                            selected={!readMode}
                            onClick={() => setReadMode(false)}
                        />
                    </div>
                </ConfiguratorStep>
                <ConfiguratorStep
                    titlePrefix="3"
                    title="Preparation"
                    description="Prepare your game for the configurator to work correctly."
                >
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
                </ConfiguratorStep>
            </PageTransition>
        </div>
    )
}

export default Configurator
