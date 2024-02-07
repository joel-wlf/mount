import { useBodyScroll } from '@geist-ui/core';
import { Radio } from 'lucide-react';
import EnergyChart from '../components/EnergyChart.jsx';
import EnergyStorage from '../components/EnergyStorage.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Navbar from '../components/Navbar';
import batteryData from '../data/batteryData.js';

function Car() {
  const [hidden, setHidden] = useBodyScroll();

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>Car</h2>
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
      </div>
    </>
  );
}

export default Car;
