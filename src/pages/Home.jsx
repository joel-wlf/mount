import { useBodyScroll } from '@geist-ui/core';
import EnergyChart from '../components/EnergyChart.jsx';
import EnergyCounter from '../components/EnergyCounter.jsx';
import EnergyRating from '../components/EnergyRating.jsx';
import EnergyStorage from '../components/EnergyStorage.jsx';
import Navbar from '../components/Navbar';
import monthData from '../data/monthData.js';
import FeatureCard from '../components/FeatureCard.jsx';
import { Cable, ArrowsUpFromLine } from 'lucide-react';

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
        <FeatureCard
          icon={<Cable size={45} />}
          title="Energy Sharing"
          initial={true}
        />
        <EnergyChart
          title="Electricity"
          data={monthData}
          colors={['green']}
          categories={['kWh']}
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
          colors={['yellow']}
          categories={['%']}
          index="date"
          minValue={0}
        />
        <EnergyStorage
          title="Wood Pellets"
          subtitle="in Storage"
          progress={29}
          color="yellow"
        />
        <FeatureCard
          icon={<ArrowsUpFromLine size={45} />}
          title="Auto Restock"
          initial={false}
        />
        <EnergyChart
          title="Water"
          data={monthData}
          colors={['blue']}
          categories={['L']}
          index="date"
          minValue={150}
        />
        <EnergyRating markerValue={40} value={190} values={[50, 20, 20, 10]} />
      </div>
    </>
  );
}

export default Home;
