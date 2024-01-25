import { Button, Input, Textarea } from '@geist-ui/core';
import { motion } from 'framer-motion';
import { Check, Upload, X } from 'lucide-react';
import { useState } from 'react';
import Backdrop from './Backdrop';

function NewsModal({ handleClose, addArticle }) {
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

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    body: '',
  });

  function getBase64Image(img) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(img);
    });
  }

  function getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = 2029;

    return `${day}.${month}.${year}`;
  }

  function handleChange(e) {
    if (e.target.name == 'image') {
      setFormData((prevState) => {
        return { ...prevState, [e.target.name]: e.target.files[0] };
      });
    } else {
      setFormData((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    }
  }

  async function handleSubmit() {
    try {
      const base64Image = await getBase64Image(formData.image);
      addArticle({
        title: formData.title,
        description: formData.description,
        image: base64Image,
        date: getCurrentDate(),
        user: 'Joel Wolf',
        type: 'local',
        body: formData.body,
      });
      handleClose();
    } catch (error) {
      console.error('Error converting image to base64:', error);
    }
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="fixed overflow-y-scroll w-[80%] h-[90%] p-6 bg-black border-[1px] border-[#333] rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="absolute top-0 right-0 p-1 m-3 bg-[rgba(0,0,0,0.4)] aspect-square rounded-full backdrop-blur-lg"
          onClick={handleClose}
        ></button>
        <h3>Post News</h3>
        <button
          className="absolute top-0 right-0 p-1 m-3 bg-[rgba(31,31,31,0.69)] aspect-square rounded-full backdrop-blur-lg"
          onClick={handleClose}
        >
          <X size={18} />
        </button>
        <div className="flex flex-col items-start justify-start h-[90%] gap-3">
          <Input
            clearable
            width="100%"
            maxLength={20}
            value={formData.title}
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <Input
            clearable
            width="100%"
            maxLength={60}
            value={formData.description}
            placeholder="Enter a short description..."
            name="description"
            onChange={handleChange}
          />
          <label
            htmlFor="upload"
            className="flex items-center justify-center gap-6 w-full bg-black border-[1px] border-[#333] text-lightgray text-sm rounded-[6px] p-2"
          >
            {formData.image ? <Check size={16} /> : <Upload size={16} />}
            Upload Image
          </label>
          <input
            id="upload"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            type="file"
          />
          <Textarea
            width="100%"
            height="60%"
            value={formData.body}
            name="body"
            onChange={handleChange}
            placeholder="Please enter your news..."
          />
          <Button onClick={handleSubmit} type="secondary">
            Post News
          </Button>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default NewsModal;
