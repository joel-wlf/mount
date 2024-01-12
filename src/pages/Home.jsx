import Navbar from '../componentes/Navbar'
import { useBodyScroll } from '@geist-ui/core'

import { AreaChart } from "@tremor/react";

function Home() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    const chartdata2 = [
        {
          date: "Jan 23",
          2022: 45,
        },
        {
          date: "Feb 23",
          2022: 52,
        },
        {
          date: "Mar 23",
          2022: 48,
        },
        {
          date: "Apr 23",
          2022: 61,
        },
        {
          date: "May 23",
          2022: 55,
        },
        {
          date: "Jun 23",
          2022: 67,
        },
        {
          date: "Jul 23",
          2022: 60,
        },
        {
          date: "Aug 23",
          2022: 72,
        },
        {
          date: "Sep 23",
          2022: 65,
        },
        {
          date: "Oct 23",
          2022: 68,
        },
        {
          date: "Nov 23",
          2022: 74,
        },
        {
          date: "Dec 23",
          2022: 71,
        },
      ];
      

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                <h2>Home</h2>
                    <h4>Strom</h4>
                    <AreaChart
                        className="h-50 mt-4"
                        showGridLines={false}
                        showLegend={false}
                        data={chartdata2}
                        index="date"
                        categories={['2022']}
                        colors={["green"]}
                        yAxisWidth={30}
                        onValueChange={(v) => setValue(v)}
                        connectNulls={true}
                      />
            </div>
        </>
    )
}

export default Home