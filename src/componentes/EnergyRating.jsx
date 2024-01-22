import { Card } from '@geist-ui/core';
import { CategoryBar, Flex, Text, Metric } from '@tremor/react';

function EnergyRating(props) {
  return (
    <Card className="max-w-sm mx-auto">
      <Flex
        justifyContent="start"
        alignItems="center"
        className="truncate space-x-3"
      >
        <Metric className="m-3">{`${props.markerValue}L`}</Metric>
        <Text>today</Text>
      </Flex>
      <CategoryBar
        values={props.values}
        colors={['emerald', 'yellow', 'orange', 'rose']}
        markerValue={props.markerValue}
        className="mt-3"
      />
    </Card>
  );
}

export default EnergyRating;
