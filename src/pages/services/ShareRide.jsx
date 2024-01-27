import { Input, Button, useBodyScroll } from '@geist-ui/core';
import Navbar from '../../components/Navbar';
import { MapPinned } from 'lucide-react';
import { useState } from 'react';

function ShareRide() {
  const [hidden, setHidden] = useBodyScroll();

  const [formData, setFormData] = useState({
    destination: '',
  });

  const [step, setStep] = useState(1);

  function toggleScroll(state) {
    setHidden(state);
  }

  function handleChange() {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function searchDrivers() {
    if (formData.destination) {
    }
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content h-full">
        <h2>Share a Ride</h2>
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
          <Button type="secondary">Search drivers</Button>
        </div>
      </div>
    </>
  );
}

export default ShareRide;
