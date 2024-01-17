import { Card } from "@geist-ui/core"

function EnergyStorage(props) {
  return (
        <div className="flex items-center justify-center w-full p-3">
        <Card  width="90%" key={props.title}>
            <h3>Package Delivery</h3>
        </Card>
        </div>
  );
}

export default EnergyStorage