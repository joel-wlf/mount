import Navbar from '../componentes/Navbar'
import EnergyChart from '../componentes/EnergyChart.jsx'
import EnergyCounter from '../componentes/EnergyCounter.jsx'
import EnergyStorage from '../componentes/EnergyStorage.jsx'
import EnergyRating from '../componentes/EnergyRating.jsx'
import { useBodyScroll } from '@geist-ui/core'
import monthData from '../monthData.js'

function Home() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }      

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
              <h2>Home</h2>
              <EnergyChart title="Electricity" data={monthData} color="green" category="kWh" minValue={15} />
              <EnergyCounter title="Electricity" metric="20 kWh" delta="30.5%" deltaType="moderateDecrease" />
              <EnergyChart title="Heizpellets" data={monthData} color="yellow" category="%" minValue={0} />
              <EnergyStorage title="Heizpellets" progress={73} color="yellow" />
              <EnergyChart title="Water" data={monthData} color="blue" category="L" minValue={150} />
              <EnergyRating markerValue={50} values={[40, 30, 20, 10]} />
            </div>
        </>
    )
}

export default Home