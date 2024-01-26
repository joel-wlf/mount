import { Button } from '@geist-ui/core';
import { CarTaxiFront, Package, CalendarClock, Utensils } from 'lucide-react';

function EnergyStorage(props) {
  function Icon() {
    if (props.icon == 'CarTaxiFront') {
      return (
        <CarTaxiFront
          className="group-hover:-translate-y-1 group-hover:scale-75 transition-all"
          size={52}
        />
      );
    } else if (props.icon == 'Package') {
      return (
        <Package
          className="group-hover:-translate-y-1 group-hover:scale-75 transition-all"
          size={52}
        />
      );
    } else if (props.icon == 'CalendarClock') {
      return (
        <CalendarClock
          className="group-hover:-translate-y-1 group-hover:scale-75 transition-all"
          size={52}
        />
      );
    } else if (props.icon == 'Utensils') {
      return (
        <Utensils
          className="group-hover:-translate-y-1 group-hover:scale-75 transition-all"
          size={52}
        />
      );
    }
  }

  return (
    <div className="flex items-center justify-center w-full p-3">
      <div className="group flex items-center justify-center flex-col w-[90%] p-5 border-[1px] border-[#333] hover:border-[#555] duration-300 rounded-[10px]">
        <Icon />
        <h3 className="group-hover:-translate-y-1 text-center group-hover:scale-110 transition-all">
          {props.title}
        </h3>
        <Button margin="0.25em">{props.buttonText[0]}</Button>
        {props.buttonText[1] && (
          <Button margin="0.25em" type="secondary">
            {props.buttonText[1]}
          </Button>
        )}
      </div>
    </div>
  );
}

export default EnergyStorage;
