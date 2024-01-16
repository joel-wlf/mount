import { Card } from "@geist-ui/core"
import { Metric, Text, Flex, ProgressBar, Grid } from "@tremor/react"

function EnergyStorage(props) {
  return (
        <Card key={props.title}>
            <Flex>
                <Metric>{`${props.progress}%`}</Metric>
                <Text>in Storage</Text>
            </Flex>
          <ProgressBar value={props.progress} className="mt-2" />
        </Card>
  );
}

export default EnergyStorage