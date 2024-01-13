import { ButtonGroup, Button, useBodyScroll } from '@geist-ui/core'
import { AreaChart, Title } from "@tremor/react";


function EnergyChart(props) {



    return (
        <div>
            <h3>{props.title}</h3>
            <AreaChart
                className="h-[150px] mt-4"
                showGridLines={false}
                showLegend={false}
                curveType='monotone'
                showXAxis={false}
                showYAxis={false}
                data={props.data}
                minValue={props.minValue}   
                index="date"
                categories={[props.category]}
                colors={[props.color]}
                yAxisWidth={30}
                onValueChange={(v) => setValue(v)}
                connectNulls={true}
                />
        </div>
    )
}

export default EnergyChart