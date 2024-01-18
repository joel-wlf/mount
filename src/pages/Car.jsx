import Navbar from '../components/Navbar.jsx'
import EnergyChart from '../components/EnergyChart'
import EnergyCounter from '../components/EnergyCounter'
import EnergyStorage from '../components/EnergyStorage'
import EnergyRating from '../components/EnergyRating'
import { useBodyScroll } from '@geist-ui/core'
import batteryData from '../batteryData.js'

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