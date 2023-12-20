import { User, Button } from '@geist-ui/core'
import { Menu, LogOut } from '@geist-ui/icons'
import { useState } from 'react'

function AppMenu(props) {

    function logOut() {
        alert('Demo')
    }

    return (
            <nav>
                <User name="Joel Wolf" src='./profile-pic.jpeg' marginRight="auto" />
                <Button auto type="abort" icon={<LogOut />} onClick={logOut} padding="5px" height="48px" margin="none"></Button> 
                <Button auto type="abort" icon={<Menu />} onClick={props.handleClick} padding="5px" height="50px" margin="none"></Button> 
            </nav>
    )
}

export default AppMenu