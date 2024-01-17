import Navbar from '../componentes/Navbar'
import { useBodyScroll } from '@geist-ui/core'


function Services() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }      

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                <h2>Services</h2>

            </div>
        </>
    )
}

export default Services