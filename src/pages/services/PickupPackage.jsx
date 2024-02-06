import { Button, Input, Snippet, useBodyScroll } from '@geist-ui/core';
import { ScanSearch, BadgeCheck, Milestone, BadgeEuro } from 'lucide-react';
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
          <ScanSearch size={120} />
          <Input
            width="100%"
            htmlType="number"
            name="code"
            maxLength={6}
            onChange={handleChange}
            placeholder="Enter Package Code..."
          />
          <Button
            disabled={formData.code.length < 6}
            type="secondary"
            onClick={() => setStep(2)}
          >
            Lookup Code
          </Button>
        </div>
        <div
          className={`${
            step != 2 && 'hidden'
          } flex items-center justify-center gap-5 flex-col w-full h-[70vh]`}
        >
          <Milestone size={120} />
          <Snippet
            text={['Bauernstraße 17', '10245 Berlin']}
            symbol=""
            width="75%"
          />
          <div className="flex items-center justify-center gap-5 flex-row w-full">
            <Button ghost width="40%" type="error">
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
          } flex items-center justify-center flex-col w-full h-[70vh]`}
        >
          <BadgeEuro size={120} />
          <p className="leading-4 text-gray-400 text-center">
            21 EuroCoins will be deposited into your account once the package is
            received.
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
