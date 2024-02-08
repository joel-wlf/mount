import { useBodyScroll } from '@geist-ui/core';
import { ArrowsUpFromLine, Cable, Sprout, SunSnow, Droplets } from 'lucide-react';
import EnergyChart from '../components/EnergyChart.jsx';
import EnergyCounter from '../components/EnergyCounter.jsx';
import EnergyRating from '../components/EnergyRating.jsx';
import EnergyStorage from '../components/EnergyStorage.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
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
        <h2>My Home</h2>
        <FeatureCard
          icon={<SunSnow size={45} />}
          title="Auto Lüften"
          initial={true}
        />
        <FeatureCard
          icon={<Sprout size={45} />}
          title="Double Gardenhouse"
          initial={false}
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
        <FeatureCard
          icon={<Cable size={45} />}
          title="Energy Sharing"
          initial={true}
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
        <FeatureCard
          icon={<Droplets size={45} />}
          title="Water Plants"
          initial={true}
        />
      </div>
    </>
  );
}

export default Home;
