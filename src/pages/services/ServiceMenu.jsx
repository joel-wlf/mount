import { Divider, Button, useBodyScroll } from '@geist-ui/core';
import { BadgeEuro, Coins } from 'lucide-react';
import Navbar from '../../components/Navbar';
import ServiceItem from '../../components/ServiceItem';
import { useEffect, useState } from 'react';

function ServiceMenu() {
  const [hidden, setHidden] = useBodyScroll();

  const [euroCoins, setEuroCoins] = useState(
    () => localStorage.getItem('euroCoins') || 120
  );

  useEffect(() => {
    if (!localStorage.getItem('euroCoins')) {
      localStorage.setItem('euroCoins', 120);
    }
  });

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>Services</h2>
        <div className="flex flex-row items-center justify-start gap-3 w-full p-5 mb-5 border-[1px] border-[#333] hover:border-[#555] duration-300 rounded-[10px]">
          <BadgeEuro size={45} />
          <h2 className="m-0">{euroCoins}</h2>
          <Button auto icon={<Coins />} scale={4 / 5} marginLeft="auto">
            Send Coins
          </Button>
        </div>
        <Divider className="z-0" />
        <ServiceItem
          title="Ride Share"
          icon="CarTaxiFront"
          routes={['share-ride', 'share-your-ride']}
          buttonText={['Discover drivers', 'Share your Ride']}
        />
        <ServiceItem
          title="Package pickup"
          icon="Package"
          routes={['post-package', 'share-your-ride']}
          buttonText={['Send package', 'Deliver package']}
        />
      </div>
    </>
  );
}

export default ServiceMenu;
