import Navbar from '../componentes/Navbar'
import EnergyChart from '../componentes/EnergyChart.jsx'
import EnergyCounter from '../componentes/EnergyCounter.jsx'
import EnergyStorage from '../componentes/EnergyStorage.jsx'
import EnergyRating from '../componentes/EnergyRating.jsx'
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
              <EnergyChart title="Wood Pellets" data={monthData} color="yellow" category="%" minValue={0} />
              <EnergyStorage title="Wood Pellets" subtitle="in Battery" progress={73} color="yellow" />
            </div>
        </>
    )
}

export default Car