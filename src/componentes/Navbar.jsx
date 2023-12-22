import { Button } from '@geist-ui/core'
import { Menu } from '@geist-ui/icons'
import AppMenu from './AppMenu'
import { useState } from 'react'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(prevState => !prevState)
    }

    return (
        !menuOpen ? 
            <nav className='nav--normal'>
                <p className='nav--title fadedown' style={{animationDelay: '50ms'}}>Mount.</p>
                <Button auto type="abort" className='fadedown' icon={<Menu />} onClick={toggleMenu} padding="5px" height="50px" margin="none"></Button> 
            </nav> :
            <AppMenu handleClick={toggleMenu} />
    )
}

export default Navbar