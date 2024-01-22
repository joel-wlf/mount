import { Button, Grid, Modal, User, useBodyScroll, useModal } from '@geist-ui/core';
import {
  CarFront,
  Home,
  LayoutDashboard,
  Leaf,
  LogOut,
  Newspaper,
  Ticket,
  X,
} from 'lucide-react';
import { useEffect } from 'react';
import MenuItem from './MenuItem';

function AppMenu(props) {
  const [hidden, setHidden] = useBodyScroll();

  const { modalVisible, setVisible, bindings } = useModal();

  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <>
      <div
        style={{
          backdropFilter: 'saturate(180%) blur(5px)',
          WebkitBackdropFilter: 'saturate(180%) blur(5px)',
          position: 'fixed',
          height: '110vh',
          width: '100vw',
          top: '-10vh',
          zIndex: 10,
        }}
      ></div>
      <nav>
        <User
          name="Joel Wolf"
          src="./profile-pic.jpeg"
          className="fadein"
          style={{ animationDelay: '50ms' }}
          marginRight="auto"
        />
        <Button
          auto
          type="abort"
          icon={<LogOut />}
          className="fadein"
          onClick={() => setVisible(true)}
          padding="5px"
          height="48px"
          margin="none"
        ></Button>
        <Button
          auto
          type="abort"
          icon={<X />}
          className="fadein"
          onClick={props.handleClick}
          padding="5px"
          height="53px"
          margin="none"
        ></Button>
      </nav>
      <main className="menu">
        <Grid.Container gap={0}>
          <MenuItem
            icon={<LayoutDashboard />}
            text="Dashboard"
            page="/"
            child="1"
          />
          <MenuItem icon={<Newspaper />} text="News" page="/news" child="2" />
          <MenuItem icon={<Leaf />} text="Energy" page="/energy" child="3" />
          <MenuItem icon={<Home />} text="My Home" page="/home" child="4" />
          <MenuItem icon={<CarFront />} text="My Car" page="/car" child="5" />
          <MenuItem
            icon={<Ticket />}
            text="Services"
            page="/services"
            child="6"
          />
        </Grid.Container>
      </main>
      <Modal {...bindings}>
        <Modal.Title>Log Out</Modal.Title>
        <Modal.Content>
          <p>Since this is just a demo, you can only use this account :)</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Got it
        </Modal.Action>
      </Modal>
    </>
  );
}

export default AppMenu;
