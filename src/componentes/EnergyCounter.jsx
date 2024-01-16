import { Card } from "@geist-ui/core"
import {  Metric, Text, Flex, BadgeDelta, Grid } from "@tremor/react";

function EnergyCounter(props) {
  return (
        <Card key={props.title}>
            <BadgeDelta className="h-7" deltaType={props.deltaType}>{props.delta}</BadgeDelta>
          <Flex justifyContent="start" alignItems="center" className="truncate space-x-3">
            <Metric className="m-3">{props.metric}</Metric>
            <Text className="truncate">this Month</Text>
          </Flex>
        </Card>
  );
}

export default EnergyCounter