import { Flex, Metric, ProgressBar, Text } from '@tremor/react';

function EnergyStorage(props) {
  return (
    <div className="border-[1px] border-[#333] rounded-[10px] p-4">
      <Flex
        justifyContent="start"
        alignItems="center"
        className="truncate space-x-3"
      >
        <Metric className="m-3">{`${props.progress}%`}</Metric>
        <Text>{props.subtitle}</Text>
      </Flex>
      <ProgressBar
        color={props.color}
        value={props.progress}
        className="mt-2"
      />
    </div>
  );
}

export default EnergyStorage;
