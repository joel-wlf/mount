import { motion } from "framer-motion";

function Backdrop({children, onClick}) {
    return (
        <motion.div
            className="fixed translate-y-[10vh] top-0 left-0 h-[90vh] w-full bg-[rgba(0,0,0,0.85)] backdrop-blur-sm flex items-center justify-center"
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop