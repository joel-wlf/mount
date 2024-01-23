import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Backdrop from './Backdrop';

function NewsModal({ handleClose, data }) {
  const slideIn = {
    hidden: {
      y: '100vh',
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="fixed overflow-y-scroll w-[80%] h-[90%] bg-black border-[1px] border-[#333] rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
    </Backdrop>
  );
}

export default NewsModal;
