import { useState } from 'react';
import { Toggle } from '@geist-ui/core';
import { TablePropertiesIcon } from 'lucide-react';

function PersonCard(props) {
  const [toggle, setToggle] = useState(props.initial);

  return (
    <div
      onClick={() => setToggle((prevState) => !prevState)}
      className="flex items-center justify-start flex-row border-[1px] border-[#333] rounded-[10px] w-full my-3 p-5"
    >
      <div className="pr-5">{props.icon}</div>
      <div className="mr-auto">
        <h4 className="m-0">{props.title}</h4>
      </div>
      <div className="-translate-y-[0.1em]">
        <Toggle
          type="secondary"
          initialChecked={toggle}
          height="20px"
          width="35px"
        />
      </div>
    </div>
  );
}

export default PersonCard;
