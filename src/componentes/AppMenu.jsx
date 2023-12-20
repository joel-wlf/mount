import { User, Button, Divider } from '@geist-ui/core'
import { Menu, LogOut } from '@geist-ui/icons'
import { useBodyScroll } from '@geist-ui/core'
import { useEffect } from 'react'

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
            <nav>
                <User name="Joel Wolf" src='./profile-pic.jpeg' marginRight="auto" />
                <Button auto type="abort" icon={<LogOut />} onClick={logOut} padding="5px" height="48px" margin="none"></Button> 
                <Button auto type="abort" icon={<Menu />} onClick={props.handleClick} padding="5px" height="50px" margin="none"></Button> 
            </nav>
            <main className="menu">
                <a href="/" className="menu--item"> Test item</a>
                <Divider />
                <a href="/" className="menu--item"> Test item</a>
                <Divider />
                <a href="/" className="menu--item"> Test item</a> 
            </main>
        </>

    )
}

export default AppMenu