import Navbar from '../components/Navbar'
import ServiceItem from '../components/ServiceItem'
import { useState } from 'react'
import { Ticket } from 'lucide-react'
import { Tabs, Divider, useBodyScroll } from '@geist-ui/core'


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
                <Tabs initialValue="1" hideDivider align="center" leftSpace={0}>
                    <Tabs.Item label={<>Spend</>} value="1">
                        <Divider className='z-0'>Community</Divider>
                        <ServiceItem title="Ride Share" icon="CarTaxiFront" buttonText="Discover Drivers" />
                        <ServiceItem title="Package Pickup" icon="Package" buttonText="Send Package" />
                        <Divider className='z-0'>Corporate</Divider>
                        <ServiceItem title="Event Planning" icon="CalendarClock" buttonText="Book Event" />
                        <ServiceItem title="Restaurant" icon="Utensils" buttonText="Reserve Table" />
                    </Tabs.Item>
                    <Tabs.Item label={<>Earn</>} value="2"></Tabs.Item>
                </Tabs>
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