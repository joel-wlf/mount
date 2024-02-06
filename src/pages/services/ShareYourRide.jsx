import { Button, Input, useBodyScroll } from '@geist-ui/core';
import gpc from 'generate-pincode';
import { BadgeCheck, MapPinned, UserSearch } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function ShareYourRide() {
  const [hidden, setHidden] = useBodyScroll();

  const [formData, setFormData] = useState({
    destination: '',
    departure: '',
    price: 0,
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

  function searchClients() {
    if (formData.destination && formData.departure && formData.price) {
      setStep(2);
    }
  }

  function handleSubmit() {
    let currentAmount = localStorage.getItem('euroCoins');
    let newAmount = currentAmount + formData.price;
    localStorage.setItem('euroCoins', newAmount);
    navigate('/services');
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content h-full">
        <h2 className="m-0">Share your Ride</h2>
        <div
          className={`${
            step != 1 && 'hidden'
          } flex items-center justify-center gap-5 flex-col w-full h-[70vh] px-10`}
        >
          <MapPinned size={120} />
          <Input
            width="100%"
            name="destination"
            onChange={handleChange}
            placeholder="Where are you going?"
          />
          <Input
            width="100%"
            name="departure"
            onChange={handleChange}
            placeholder="Approximate departure time "
          />
          <Input
            width="100%"
            name="price"
            htmlType="number"
            onChange={handleChange}
            placeholder="Your Price"
          />
          <Button
            type="secondary"
            disabled={
              !formData.destination || !formData.departure || !formData.price
            }
            onClick={searchClients}
          >
            Search Clients
          </Button>
        </div>
        <div
          className={`${
            step != 2 && 'hidden'
          } flex items-center justify-center flex-col gap-5 h-[70vh]`}
        >
          <UserSearch size={120} />
          <p className="text-gray-300 text-lg text-center m-0">
            Anton requested a ride in direction of "{formData.destination}"
          </p>
          <div className="flex items-center justify-center gap-5 flex-row w-full">
            <Button
              ghost
              width="40%"
              type="error"
              onClick={() => navigate('/services')}
            >
              Cancel
            </Button>
            <Button ghost width="40%" type="success" onClick={() => setStep(3)}>
              Accept
            </Button>
          </div>
        </div>
        <div
          className={`${
            step != 3 && 'hidden'
          } flex items-center justify-center flex-col gap-5 h-[70vh]`}
        >
          <UserSearch size={120} />
          <Input htmlType="number" placeholder="Enter Client Code" />
          <Button width="40%" type="secondary" onClick={handleSubmit}>
            All set!
          </Button>
        </div>
      </div>
    </>
  );
}

export default ShareYourRide;
