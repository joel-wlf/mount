import { User, Flag, CarTaxiFront, BadgeEuro } from 'lucide-react';

function PersonCard(props) {
  return (
    <div className="flex items-center justify-start flex-row border-[1px] border-[#333] rounded-[10px] w-full p-4">
      <User size={45} />
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 ml-4">
        <h4 className="m-0">{props.name}</h4>
        <div className="flex items-center justify-start gap-3">
          <CarTaxiFront size={20} />
          {props.byYou}
        </div>
        <div className="flex items-center justify-start gap-3">
          <BadgeEuro size={20} />
          {props.price}
        </div>
        <div className="flex items-center justify-start gap-3">
          <Flag size={20} />
          {props.arrival}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
