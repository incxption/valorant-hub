import React, { useEffect, useState } from "react"
import Breadcrumb from "@components/window/Breadcrumb"
import { History } from "history"
import { IoIosArrowForward } from "react-icons/all"
import windowedFullscreen from "@assets/configurator/preparation/windowed_fullscreen.png"
import language from "@assets/configurator/preparation/language.png"
import mainScreen from "@assets/configurator/preparation/main_screen.jpg"
import { motion } from "framer-motion"

type Props = {
    history: History
}

const Next = <IoIosArrowForward className="inline-block mb-0.5 text-gray-400" />

const steps = [
    {
        title: "Switch to English",
        description: (
            <>
                Go to{" "}
                <b>
                    Settings {Next} General {Next} Accessibility
                </b>{" "}
                and change the <b>Text Language</b> option to <b>English (United States)</b>. You may have to restart
                your game.
            </>
        ),
        image: language
    },
    {
        title: "Enable Windowed Fullscreen",
        description: (
            <>
                Go to{" "}
                <b>
                    Settings {Next} Video {Next} General
                </b>{" "}
                and change the <b>Display Mode</b> option to <b>Windowed Fullscreen</b>. Make sure to save the settings
                by clicking <b>Apply</b>.
            </>
        ),
        image: windowedFullscreen
    },
    {
        title: "Go to Main Screen",
        description: (
            <>
                Finally, <b>close the settings</b> and make sure your game is in the <b>Main Screen</b>.
            </>
        ),
        image: mainScreen
    }
]

const Preparation: React.FC<Props> = ({ history }) => {
    const [stepIndex, setStepIndex] = useState(0)
    const currentStep = steps[stepIndex]

    const [loading, setLoading] = useState(true)
    const [preloaded, setPreloaded] = useState(false)

    function next() {
        if (stepIndex === steps.length - 1) {
            history.push("/configurator")
        } else {
            setStepIndex((prev) => prev + 1)
        }
    }

    useEffect(() => {
        if (!preloaded) {
            const images = steps.map((step) => step.image)
            cacheImages(images).then(() => setPreloaded(true))
        }
    }, [preloaded])

    const cacheImages = async (srcArray: string[]) => {
        const promises = await srcArray.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.src = src
                img.onload = () => resolve("Load error")
                img.onerror = () => reject()
            })
        })
        await Promise.all(promises)

        setLoading(false)
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="h-full w-full flex flex-col tracking-tight bg-cover relative">
            <div
                className="h-full w-full tracking-tight bg-cover relative bg-no-repeat"
                style={{ backgroundImage: `url('${currentStep.image}')`, backgroundPosition: "0 2.3rem" }}
            ></div>
            <div className="p-3 bg-gradient-to-b from-black via-black to-transparent h-20 dark z-50 absolute w-full">
                <Breadcrumb
                    history={history}
                    path={[
                        { route: "/configurator", label: "Configurator" },
                        { route: "/configurator?preparation=true", label: "Preparation" }
                    ]}
                />
            </div>
            <div className="absolute left-0 bottom-0 w-full flex items-end px-5 py-4 bg-gray-50 border-t-2 border-blue-500 overflow-hidden">
                <motion.div key={stepIndex} animate={{ y: 0 }} initial={{ y: 50 }} className="flex-grow">
                    <h1 className="text-black text-xl font-semibold tracking-tight mb-1">{currentStep.title}</h1>
                    <p className="text-black w-full leading-5 pr-10">{currentStep.description}</p>
                </motion.div>
                <motion.button
                    key={stepIndex + 1}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="outline-none focus:outline-none ml-2 w-36 py-1.5 transition-colors bg-blue-500
                               border-2 border-blue-500 hover:border-blue-400 shadow-md text-white rounded-md"
                    onClick={next}
                >
                    {stepIndex === steps.length - 1 ? "Finish" : "Next"}
                </motion.button>
            </div>
        </div>
    )
}

export default Preparation
