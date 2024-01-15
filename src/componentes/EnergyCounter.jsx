import { Card } from "@geist-ui/core"
import {  Metric, Text, Flex, BadgeDelta, Grid } from "@tremor/react";

export default function EnergyCounter(props) {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card className="mb-20" key={props.title}>
            <BadgeDelta className="h-7" deltaType={props.deltaType}>{props.delta}</BadgeDelta>
          <Flex justifyContent="start" alignItems="center" className="truncate space-x-3">
            <Metric className="m-3">{props.metric}</Metric>
            <Text className="truncate">this Month</Text>
          </Flex>
        </Card>
    </Grid>
  );
}