import { Button, Input, useBodyScroll } from '@geist-ui/core';
import gpc from 'generate-pincode';
import { BadgeCheck, MapPinned } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import PersonCard from '../../components/PersonCard';

function ShareRide() {
  const [hidden, setHidden] = useBodyScroll();

  const [formData, setFormData] = useState({
    destination: '',
  });

  const navigate = useNavigate();

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
        <div className={`${step != 2 && 'hidden'}`}>
          <p className="text-gray-500 mt-0">
            Available Drivers going in direction of "{formData.destination}":
          </p>
          <PersonCard
            next={() => setStep(3)}
            name="Anton"
            byYou="16:32"
            arrival="16:52"
            price="14"
          />
          <PersonCard
            next={() => setStep(3)}
            name="Anton"
            byYou="16:32"
            arrival="16:52"
            price="14"
          />
          <PersonCard
            next={() => setStep(3)}
            name="Anton"
            byYou="16:32"
            arrival="16:52"
            price="14"
          />
          <PersonCard
            next={() => setStep(3)}
            name="Anton"
            byYou="16:32"
            arrival="16:52"
            price="14"
          />
        </div>
        <div
          className={`${
            step != 3 && 'hidden'
          } flex items-center justify-center flex-col w-full h-[70vh]`}
        >
          <BadgeCheck size={120} />
          <h2 className="tracking-widest text-6xl mt-5">{gpc(6)}</h2>
          <p className="leading-4 text-gray-400 text-center">
            Please provide this code to your driver.
          </p>
          <Button
            onClick={() => navigate('/services')}
            marginTop="2vh"
            type="secondary"
          >
            All set!
          </Button>
        </div>
      </div>
    </>
  );
}

export default ShareRide;
