import { BadgeDelta, Flex, Metric, Text } from '@tremor/react';

function EnergyCounter(props) {
  return (
    <div className="border-[1px] border-[#333] rounded-[10px] p-4">
      <BadgeDelta className="h-7" deltaType={props.deltaType}>
        {props.delta}
      </BadgeDelta>
      <Flex
        justifyContent="start"
        alignItems="center"
        className="truncate space-x-3"
      >
        <Metric className="m-3">{props.metric}</Metric>
        <Text className="truncate">this Month</Text>
      </Flex>
    </div>
  );
}

export default EnergyCounter;
