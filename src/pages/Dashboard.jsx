import { useBodyScroll } from '@geist-ui/core';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnergyChart from '../components/EnergyChart';
import EnergyStorage from '../components/EnergyStorage';
import Navbar from '../components/Navbar';
import NewsItem from '../components/NewsItem';
import monthData from '../data/monthData';
import FeatureCard from '../components/FeatureCard';
import { Radio } from 'lucide-react';

function Dashboard() {
  const [hidden, setHidden] = useBodyScroll();

  const navigate = useNavigate();

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>Dashboard</h2>
        <EnergyChart
          data={monthData}
          colors={['green', 'blue', 'yellow']}
          categories={['kWh', 'L', '%']}
          index="date"
          minValue={200}
        />
        <h4
          className="underline underline-offset-4 pl-2 pb-3 cursor-pointer flex items-center gap-1"
          onClick={() => navigate('/home')}
        >
          My Home <ArrowRight size={18} />
        </h4>
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
        <NewsItem
          key="Zuschüsse genehmigt"
          handleScroll={setHidden}
          data={{
            title: 'Zuschüsse genehmigt',
            description:
              'Die Zuschüsse des EU-Parlamentes wurden genehmigt tragen zu ...',
            image: 'eu-parlament.jpg',
            date: '15.12.2028',
            user: 'Dorfvorstand',
            type: 'static',
            body: 'Wir wollen euch hiermit mit Freuden mitteilen, dass die erneuten Zuschüsse für unser smartes Dorf genehmigt worden sind. Somit haben wir Zugriff auf weitere 150 Tausend Euro mit denen wir unser Straßennetz auf den neusten Stand upgraden  können und somit weiter zu unserem Ziel „150% Klimafreundlich“ zu kommen. Des weiteren wollen wir mit dem Geld unsere Schule auf den neusten Stand bringen und somit den Kindern eine umweltbewusste Erziehung ermöglichen können. Außerdem könnt Ihr bei der nächsten Dorfversammlung noch weitere Vorschläge einbringen, wofür wir das Geld noch verwenden können.Viele Grüße Der Dorfvorstand',
          }}
        />
        <h4
          className="underline underline-offset-4 pl-2 cursor-pointer flex items-center gap-1"
          onClick={() => navigate('/news')}
        >
          Alle News <ArrowRight size={18} />
        </h4>
      </div>
    </>
  );
}

export default Dashboard;
