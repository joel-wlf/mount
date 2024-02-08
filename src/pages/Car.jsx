import { useBodyScroll } from '@geist-ui/core';
import { ArrowRight, CarTaxiFront, Radio } from 'lucide-react';
import EnergyChart from '../components/EnergyChart.jsx';
import EnergyStorage from '../components/EnergyStorage.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Navbar from '../components/Navbar';
import batteryData from '../data/batteryData.js';
import { useNavigate } from 'react-router-dom';

function Car() {
  const [hidden, setHidden] = useBodyScroll();

  const navigate = useNavigate();

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>My Car</h2>
        <EnergyChart
          title="Battery usage"
          data={batteryData}
          colors={['green']}
          categories={['charge']}
          index="time"
          minValue={0}
        />
        <EnergyStorage
          title="Battery usage"
          subtitle="in Battery"
          progress={51}
          color="green"
        />
        <FeatureCard
          icon={<Radio size={45} />}
          title="Wireless Charging"
          initial={true}
        />

        <div
          onClick={() => navigate('/services')}
          className="flex items-center justify-start flex-row border-[1px] border-[#333] rounded-[10px] w-full my-3 p-5"
        >
          <div className="pr-5">
            <CarTaxiFront size={45} />
          </div>
          <div className="mr-auto">
            <h4 className="m-0 flex items-center gap-2">
              Car Sharing <ArrowRight size={18} />
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Car;
