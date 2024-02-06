import { Button } from '@geist-ui/core';
import {
  CarTaxiFront,
  Package,
  CalendarClock,
  Utensils,
  ParkingSquare,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function EnergyStorage(props) {
  const navigate = useNavigate();

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
    } else if (props.icon == 'ParkingSquare') {
      return (
        <ParkingSquare
          className="group-hover:-translate-y-1 group-hover:scale-75 transition-all"
          size={52}
        />
      );
    }
  }

  return (
    <div className="group flex items-center justify-center flex-col my-5 w-full p-5 border-[1px] border-[#333] hover:border-[#555] duration-300 rounded-[10px]">
      <Icon />
      <h3 className="group-hover:-translate-y-1 text-center group-hover:scale-110 transition-all">
        {props.title}
      </h3>
      <Button
        onClick={() => navigate('/services/' + props.routes[0])}
        margin="0.25em"
      >
        {props.buttonText[0]}
      </Button>
      {props.buttonText[1] && (
        <Button
          onClick={() => navigate('/services/' + props.routes[1])}
          margin="0.25em"
          type="secondary"
        >
          {props.buttonText[1]}
        </Button>
      )}
    </div>
  );
}

export default EnergyStorage;
