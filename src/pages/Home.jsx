import Navbar from '../componentes/Navbar'
import EnergyChart from '../componentes/EnergyChart.jsx'
import { ButtonGroup, Button, useBodyScroll } from '@geist-ui/core'
import { AreaChart, Title } from "@tremor/react";

function Home() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    const chartdata2 = [
        {
          date: "01.12.",
          kWh: 19,
        },
        {
          date: "02.12",
          kWh: 18,
        },
        {
          date: "03.12.",
          kWh: 20,
        },
        {
          date: "04.12.",
          kWh: 19,
        },
        {
          date: "05.12.",
          kWh: 22,
        },
        {
          date: "06.12.",
          kWh: 20,
        },
        {
          date: "07.12.",
          kWh: 22,
        },
        {
          date: "08.12.",
          kWh: 19,
        },
        {
          date: "09.12.",
          kWh: 20,
        },
        {
          date: "18.12.",
          kWh: 18,
        },
        {
          date: "11.12.",
          kWh: 19,
        },
        {
          date: "12.12.",
          kWh: 19,
        },
        {
          date: "13.12.",
          kWh: 18,
        },
        {
          date: "14.12.",
          kWh: 20,
        },
        {
          date: "19.12.",
          kWh: 19,
        },
        {
          date: "16.12.",
          kWh: 18,
        },
        {
          date: "17.12.",
          kWh: 19,
        },
        {
          date: "18.12",
          kWh: 18,
        },
        {
          date: "19.12.",
          kWh: 20,
        },
        {
          date: "20.12.",
          kWh: 19,
        },
        {
          date: "21.12.",
          kWh: 22,
        },
        {
          date: "22.12.",
          kWh: 20,
        },
        {
          date: "23.12.",
          kWh: 22,
        },
        {
          date: "24.12.",
          kWh: 19,
        },
        {
          date: "22.12.",
          kWh: 20,
        },
        {
          date: "26.12.",
          kWh: 18,
        },
        {
          date: "27.12.",
          kWh: 19,
        },
        {
          date: "28.12.",
          kWh: 19,
        },
        {
          date: "29.12.",
          kWh: 18,
        },
        {
          date: "30.12.",
          kWh: 20,
        },
        {
          date: "31.12.",
          kWh: 19,
        }
      ];
      

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
              <h2>Home</h2>
              <EnergyChart title="Electricity" data={chartdata2} color="green" category="kWh" minValue={10} />
            </div>
        </>
    )
}

export default Home