import { Button, Input, useBodyScroll } from '@geist-ui/core';
import gpc from 'generate-pincode';
import { BadgeCheck, Milestone, BadgeEuro } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function PickupPackage() {
  const [hidden, setHidden] = useBodyScroll();

  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    code: '',
  });

  function toggleScroll(state) {
    setHidden(state);
  }

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content h-full">
        <h2 className="m-0 leading-9">Send your Package</h2>
        <div
          className={`${
            step != 1 && 'hidden'
          } flex items-center justify-center gap-5 flex-col w-full h-[60vh] px-10`}
        >
          <Milestone size={120} />
          <Input
            width="100%"
            type="number"
            name="code"
            onChange={handleChange}
            placeholder="Package Code"
          />
          <div className="flex items-center justify-center gap-2 m-0">
            <BadgeEuro />
            <p className="m-0">21 EuroCoins</p>
          </div>
          <Button
            disabled={formData.code == ''}
            type="secondary"
            onClick={() => setStep(2)}
          >
            Post Package
          </Button>
        </div>
        <div
          className={`${
            step != 2 && 'hidden'
          } flex items-center justify-center flex-col w-full h-[70vh]`}
        >
          <BadgeCheck size={120} />
          <h2 className="tracking-widest text-6xl mt-5">{gpc(6)}</h2>
          <p className="leading-4 text-gray-400 text-center">
            Please put this code anywhere on your Package and place it in a
            visible spot in you front yard.
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

export default PickupPackage;
