import Navbar from '../components/Navbar.jsx'
import EnergyChart from '../components/EnergyChart'
import EnergyCounter from '../components/EnergyCounter'
import EnergyStorage from '../components/EnergyStorage'
import EnergyRating from '../components/EnergyRating'
import { useBodyScroll } from '@geist-ui/core'
import monthData from '../monthData'

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