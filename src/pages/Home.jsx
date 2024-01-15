import Navbar from '../componentes/Navbar'
import EnergyChart from '../componentes/EnergyChart.jsx'
import { ButtonGroup, Button, useBodyScroll } from '@geist-ui/core'
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
              <EnergyChart title="Electricity" data={monthData} color="green" category="kWh" minValue={10} />
            </div>
        </>
    )
}

export default Home