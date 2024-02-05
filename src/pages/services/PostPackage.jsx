import { Button, Input, Textarea, useBodyScroll } from '@geist-ui/core';
import gpc from 'generate-pincode';
import { Milestone, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import PersonCard from '../../components/PersonCard';

function PostPackage() {
  const [hidden, setHidden] = useBodyScroll();

  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content h-full">
        <h2 className="m-0">Send your Package</h2>
        <div
          className={`${
            step != 1 && 'hidden'
          } flex items-center justify-center gap-5 flex-col w-full h-[60vh] px-10`}
        >
          <Milestone size={120} />
          <Textarea
            width="100%"
            name="destination"
            placeholder="Pick destination..."
          />
          <Button type="secondary">Post Package</Button>
        </div>
        <div
          className={`${
            step != 2 && 'hidden'
          } flex items-center justify-center flex-col w-full h-[70vh]`}
        >
          <BadgeCheck size={120} />
          <h2 className="tracking-widest text-6xl mt-5">{gpc(6)}</h2>
          <p className="leading-4 text-gray-400 text-center">
            Please put this code anywhere on your Package
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

export default PostPackage;
