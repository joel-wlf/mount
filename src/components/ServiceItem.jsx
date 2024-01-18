import { Package } from "lucide-react";
import { Button } from "@geist-ui/core";

function EnergyStorage(props) {
  return (
        <div className="flex items-center justify-center w-full p-3">
            <div className="group flex items-center justify-center flex-col w-[90%] p-5 border-[1px] border-[#333] hover:border-[#555] duration-300 rounded-[10px]">
              <Package className="group-hover:-translate-y-1 group-hover:scale-75 transition-all" size={52}/>
              <h3 className="group-hover:-translate-y-1 group-hover:scale-110 transition-all">Package Delivery</h3>
              <Button>Send Package</Button>
            </div>
        </div>
  );
}

export default EnergyStorage