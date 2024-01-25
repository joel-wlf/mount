import { motion } from 'framer-motion';
import { X, Upload, Check } from 'lucide-react';
import { Input, Textarea, Button } from '@geist-ui/core';
import Backdrop from './Backdrop';
import { useState } from 'react';

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
    image: '',
    body: '',
  });

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit() {
    addArticle({
      title: 'test 2028',
      description:
        'Der Erntebericht für 2028 ist veröffentlicht und kann aufgerufen werden ...',
      image: 'agrar.jpg',
      date: '08.12.2028',
      user: 'Bundesagrarminesterium',
      type: 'static',
      body: 'Im Agrarbericht 2028 für unser innovatives Dorf verzeichnen wir beeindruckende Fortschritte. Die Ernteerträge sind um 30% gestiegen, dank fortschrittlicher Anbautechnologien und nachhaltiger Bewirtschaftungsmethoden. Die Einführung von Smart-Farming-Systemen hat die Effizienz verbessert und den Ressourcenverbrauch reduziert. Zudem haben wir erfolgreich alternative Energiequellen in der Landwirtschaft integriert, was zu einer 40%igen Senkung der CO2-Emissionen geführt hat. Das innovative Dorf zeigt sich als Vorreiter in der nachhaltigen Landwirtschaft, wodurch sowohl ökologische als auch wirtschaftliche Ziele erreicht werden. Den Agrarbericht kann auf der Seite des Bundesagrarminesterium aufgerufen werden.',
    });
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
        <div className="flex flex-col items-start justify-start h-[90%] gap-3">
          <Input
            clearable
            width="100%"
            value={formData.title}
            placeholder="Title"
            name="title"
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
            value={formData.image}
            id="upload"
            name="image"
            onChange={handleChange}
            className="hidden"
            type="file"
          />
          <Textarea
            width="100%"
            height="70%"
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
