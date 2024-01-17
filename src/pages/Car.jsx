import Navbar from '../components/Navbar.js'
import EnergyChart from '../components/EnergyChart.js'
import EnergyCounter from '../components/EnergyCounter.jsx'
import EnergyStorage from '../components/EnergyStorage.js'
import EnergyRating from '../components/EnergyRating.js'
import { useBodyScroll } from '@geist-ui/core'
import monthData from '../monthData.js'

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
              <EnergyChart title="Battery usage" data={monthData} color="green" category="%" minValue={0} />
              <EnergyStorage title="Battery usage" subtitle="in Battery" progress={73} color="green" />
            </div>
        </>
    )
}

export default Car