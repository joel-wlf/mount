import { CategoryBar, Flex, Metric, Text } from '@tremor/react';

function EnergyRating(props) {
  return (
    <div className="border-[1px] border-[#333] rounded-[10px] p-4">
      <Flex
        justifyContent="start"
        alignItems="center"
        className="truncate space-x-3"
      >
        <Metric className="m-3">{`${props.value} L`}</Metric>
        <Text>today</Text>
      </Flex>
      <CategoryBar
        values={props.values}
        showLabels={false}
        colors={['emerald', 'yellow', 'orange', 'rose']}
        markerValue={props.markerValue}
        className="mt-3"
      />
    </div>
  );
}

export default EnergyRating;
