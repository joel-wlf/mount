import Navbar from '../componentes/Navbar'
import EnergyChart from '../componentes/EnergyChart.jsx'
import EnergyCounter from '../componentes/EnergyCounter.jsx'
import EnergyStorage from '../componentes/EnergyStorage.jsx'
import EnergyRating from '../componentes/EnergyRating.jsx'
import { useBodyScroll } from '@geist-ui/core'
import batteryData from '../data/batteryData.js'

function Car() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }      

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
              <h2>Car</h2>
              <EnergyChart title="Battery usage" data={batteryData} color="green" category="charge" index="time" minValue={0} />
              <EnergyStorage title="Battery usage" subtitle="in Battery" progress={73} color="green" />
            </div>
        </>
    )
}

export default Car