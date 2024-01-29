import { Button, Input, useBodyScroll } from '@geist-ui/core';
import { MapPinned } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import PersonCard from '../../components/PersonCard';

function ShareRide() {
  const [hidden, setHidden] = useBodyScroll();

  const [formData, setFormData] = useState({
    destination: '',
  });

  const [step, setStep] = useState(1);

  function toggleScroll(state) {
    setHidden(state);
  }

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function searchDrivers() {
    if (formData.destination) {
      setStep(2);
    }
  }

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
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content h-full">
        <h2 className="m-0">Share a Ride</h2>
        <div
          className={`${
            step != 1 && 'hidden'
          } flex items-center justify-center gap-5 flex-col w-full h-[60vh] px-10`}
        >
          <MapPinned size={120} />
          <Input
            width="100%"
            name="destination"
            onChange={handleChange}
            placeholder="Pick destination..."
          />
          <Button
            type="secondary"
            disabled={formData.destination == ''}
            onClick={searchDrivers}
          >
            Search drivers
          </Button>
        </div>
        <div className={`${step != 2 && 'hidden'} `}>
          <p className="text-gray-500 mt-0">
            Available Drivers going in direction of "{formData.destination}":
          </p>
          <PersonCard />
        </div>
      </div>
    </>
  );
}

export default ShareRide;
