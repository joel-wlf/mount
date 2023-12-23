import { User, Button, Grid } from '@geist-ui/core'
import { X, LogOut, Home, LayoutDashboard, CarFront, Newspaper, Ticket } from 'lucide-react'
import { useBodyScroll } from '@geist-ui/core'
import { useEffect } from 'react'
import MenuItem from './MenuItem'

function AppMenu(props) {

    const [hidden, setHidden] = useBodyScroll()


    useEffect(() => {
        setHidden(false)
    }, [])

    function logOut() {
        alert('Demo')
    }

    return (
        <>
            <div style={{backdropFilter: 'saturate(180%) blur(5px)', position: 'fixed', height: '110vh', width: '100vw', top: '-10vh'}}></div>
            <nav>
                <User name="Joel Wolf" src='./profile-pic.jpeg' className='fadein' style={{animationDelay: '50ms'}} marginRight="auto" />
                <Button auto type="abort" icon={<LogOut />} className='fadein' onClick={logOut} padding="5px" height="48px" margin="none"></Button> 
                <Button auto type="abort" icon={<X />} className='fadein' onClick={props.handleClick} padding="5px" height="53px" margin="none"></Button> 
            </nav>
            <main className="menu">
            <Grid.Container gap={0}>
                <MenuItem icon={<LayoutDashboard />} text="Dashboard" page="/dashboard" child="1" />
                <MenuItem icon={<Newspaper />} text="News" page="/test" child="2" />
                <MenuItem icon={<Home />} text="My Home" page="/test" child="3" />
                <MenuItem icon={<CarFront />} text="My Car" page="/test" child="4" />
                <MenuItem icon={<Ticket />} text="Services" page="/test" child="5" />
            </Grid.Container>
            </main>        
        </>

        

    )
}

export default AppMenu