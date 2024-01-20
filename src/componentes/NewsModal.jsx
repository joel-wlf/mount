import { motion } from "framer-motion"
import Backdrop from "./Backdrop"

function NewsModal({handleClose, text}) {

    const slideIn = {
        hidden: {
            y: "100vh"
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y: "100vh"
        }
    }

    return (
        <Backdrop
            onClick={handleClose}
        >
            <motion.div
                className="fixed overflow-y-scroll w-[80%] h-[90%] bg-red-800 border-[1px] border-[#333] rounded-[10px]"
                onClick={(e) => e.stopPropagation()}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>test<br></br><br></br><br></br><br></br><br></br><br></br><br></br>test<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>est<br></br><br></br><br></br><br></br><br></br>t<br></br><br></br><br></br><br></br><br></br>t<br></br><br></br><br></br><br></br><br></br></p>
            </motion.div>
        </Backdrop>
    )
}

export default NewsModal