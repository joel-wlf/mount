import { Card } from "@geist-ui/core"
import { Metric, Text, Flex, ProgressBar, Grid } from "@tremor/react"

function EnergyStorage(props) {
  return (
        <Card key={props.title}>
            <Flex justifyContent="start" alignItems="center" className="truncate space-x-3">
                <Metric className="m-3" >{`${props.progress}%`}</Metric>
                <Text>in Storage</Text>
            </Flex>
          <ProgressBar color={props.color} value={props.progress} className="mt-2" />
        </Card>
  );
}

export default EnergyStorage