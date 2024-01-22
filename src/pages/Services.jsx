import { Divider, useBodyScroll } from '@geist-ui/core'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ServiceItem from '../components/ServiceItem'


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
                <Divider className='z-0'>Community</Divider>
                <ServiceItem title="Ride Share" icon="CarTaxiFront" buttonText="Discover Drivers" />
                <ServiceItem title="Package Pickup" icon="Package" buttonText="Send Package" />
                <Divider className='z-0'>Corporate</Divider>
                <ServiceItem title="Event Planning" icon="CalendarClock" buttonText="Book Event" />
                <ServiceItem title="Restaurant" icon="Utensils" buttonText="Reserve Table" />
            </>
        )
    }
    
    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                {service}
            </div>
        </>
    )
}

export default Services