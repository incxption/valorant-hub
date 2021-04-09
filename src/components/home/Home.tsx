import React from "react"
import Breadcrumb from "@components/window/Breadcrumb"
import Product from "@components/home/Product"
import { IoIosSettings, IoKey } from "react-icons/all"
import { History } from "history"
import PageTransition from "@components/PageTransition"

type Props = {
    history: History
}

const Home: React.FC<Props> = ({ history }) => {
    return (
        <div className="flex-grow flex flex-col p-3 overflow-x-hidden">
            <Breadcrumb history={history} path={[]} />
            <PageTransition className="w-full flex-grow mt-5 px-5 flex justify-center items-center">
                <Product
                    name="Configurator"
                    description="Synchronize your settings over multiple accounts and share profiles with other users."
                    route="/configurator"
                    icon={IoIosSettings}
                    colors={["purple-500", "indigo-500"]}
                    history={history}
                />
                <Product
                    name="Account Manager"
                    description="Keep all your Valorant accounts in one place and manage username, password and more."
                    route="/account_manager"
                    icon={IoKey}
                    colors={["yellow-400", "orange-500"]}
                    history={history}
                />
            </PageTransition>
        </div>
    )
}

export default Home
