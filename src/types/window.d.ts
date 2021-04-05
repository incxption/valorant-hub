import { Remote } from "electron"

declare global {
    interface Window {
        require: (module: "electron") => {
            remote: Remote
        }
    }
}
