import Navbar from '../components/Navbar'
import ServiceItem from '../components/ServiceItem'
import { useState } from 'react'
import { useBodyScroll } from '@geist-ui/core'


function Services() {
    
    const [hidden, setHidden] = useBodyScroll()

    const [service, setService] = useState(<Menu />)
    
    function toggleScroll(state) {
        setHidden(state)
    }     
    
    function Menu() {
        return (
            <>
                <h2>Services</h2>
                <ServiceItem title="Package Pickup" icon="Package" buttonText="Send Package" />
                <ServiceItem title="Package Pickup" icon="Package" buttonText="Send Package" />
                <ServiceItem title="Package Pickup" icon="Package" buttonText="Send Package" />
                <ServiceItem title="Package Pickup" icon="Package" buttonText="Send Package" />
            </>
        )
    }
    
    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                <Menu />
            </div>
        </>
    )
}

export default Services