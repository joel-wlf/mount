import { useBodyScroll } from '@geist-ui/core';
import EnergyChart from '../components/EnergyChart.jsx';
import EnergyStorage from '../components/EnergyStorage.jsx';
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
      </div>
    </>
  );
}

export default Car;
