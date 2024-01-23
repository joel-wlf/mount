import { useBodyScroll } from '@geist-ui/core';
import EnergyChart from '../components/EnergyChart.jsx';
import EnergyCounter from '../components/EnergyCounter.jsx';
import EnergyRating from '../components/EnergyRating.jsx';
import EnergyStorage from '../components/EnergyStorage.jsx';
import Navbar from '../components/Navbar';
import monthData from '../data/monthData.js';

function Home() {
  const [hidden, setHidden] = useBodyScroll();

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>Home</h2>
        <EnergyChart
          title="Electricity"
          data={monthData}
          color="green"
          category="kWh"
          index="date"
          minValue={15}
        />
        <EnergyCounter
          title="Electricity"
          metric="611 kWh"
          delta="30.5%"
          deltaType="moderateDecrease"
        />
        <EnergyChart
          title="Wood Pellets"
          data={monthData}
          color="yellow"
          category="%"
          index="date"
          minValue={0}
        />
        <EnergyStorage
          title="Wood Pellets"
          subtitle="in Storage"
          progress={29}
          color="yellow"
        />
        <EnergyChart
          title="Water"
          data={monthData}
          color="blue"
          category="L"
          index="date"
          minValue={150}
        />
        <EnergyRating markerValue={40} values={[70, 80, 90, 100]} />
      </div>
    </>
  );
}

export default Home;
