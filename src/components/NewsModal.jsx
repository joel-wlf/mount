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
      >
        <button
          className="absolute top-0 right-0 p-1 m-3 bg-[rgba(0,0,0,0.4)] aspect-square rounded-full backdrop-blur-lg"
          onClick={handleClose}
        >
          <X size={18} />
        </button>
        {data.type == 'static' ? (
          <img src={`news/${data.image}`} />
        ) : (
          <img src={`data:image/jpeg;base64,${data.image}`} />
        )}
        <div className="p-6">
          <h3 className="m-0">{data.title}</h3>
          <p className="text-gray-500 m-0">{`${data.date} | ${data.user}`}</p>
          <p className="text-gray-400 leading-tight">{data.body}</p>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default NewsModal;
