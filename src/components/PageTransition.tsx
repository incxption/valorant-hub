import { motion } from "framer-motion"
import React from "react"

type Props = {
    className?: string | undefined
}

const PageTransition: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition
