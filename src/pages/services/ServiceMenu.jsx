import { Divider, useBodyScroll } from '@geist-ui/core';
import Navbar from '../../components/Navbar';
import ServiceItem from '../../components/ServiceItem';

function ServiceMenu() {
  const [hidden, setHidden] = useBodyScroll();

  function toggleScroll(state) {
    setHidden(state);
  }

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>Services</h2>
        <Divider className="z-0">Community</Divider>
        <ServiceItem
          title="Ride Share"
          icon="CarTaxiFront"
          buttonText={['Discover drivers', 'Share your Ride']}
        />
        <ServiceItem
          title="Package pickup"
          icon="Package"
          buttonText={['Send package', 'Deliver package']}
        />
        <Divider className="z-0">Corporate</Divider>
        <ServiceItem
          title="Event Planning"
          icon="CalendarClock"
          buttonText={['Book Event']}
        />
        <ServiceItem
          title="Restaurant"
          icon="Utensils"
          buttonText={['Reserve Table']}
        />
      </div>
    </>
  );
}

export default ServiceMenu;
