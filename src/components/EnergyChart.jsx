import { AreaChart } from '@tremor/react';

function EnergyChart(props) {
  return (
    <div className="mb-5">
      <h3 className="mt-5">{props.title}</h3>
      <AreaChart
        className="h-[150px] mt-4"
        showGridLines={false}
        showLegend={false}
        curveType="monotone"
        showXAxis={false}
        showYAxis={false}
        data={props.data}
        minValue={props.minValue}
        index={props.index}
        categories={props.categories}
        colors={props.colors}
        yAxisWidth={30}
        connectNulls={true}
      />
    </div>
  );
}

export default EnergyChart;
