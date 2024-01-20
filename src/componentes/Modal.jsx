import { motion } from "framer-motion"
import Backdrop from "./Backdrop"

function Modal({handleClose, text}) {

    const slideIn = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            x: "100vw"
        }
    }

    return (
        <Backdrop
            onClick={handleClose}
        >
            <motion.div
                className="w-[80%] min-h-80 bg-green-900"
                onClick={(e) => e.stopPropagation()}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >

            </motion.div>
        </Backdrop>
    )
}

export default Modal