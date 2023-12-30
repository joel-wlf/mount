import Navbar from '../componentes/Navbar'
import { useBodyScroll, Button } from '@geist-ui/core'

function Dashboard() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
            <h2>Dashboard</h2>
            <p>dfhjkdfhgjk <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />asdbfjkladsfbjk<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />df</p>
            </div>
        </>
    )
}

export default Dashboard