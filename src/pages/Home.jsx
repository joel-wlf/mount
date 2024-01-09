import Navbar from '../componentes/Navbar'
import { useBodyScroll, Button } from '@geist-ui/core'

function Home() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                <h2>Home</h2>
            </div>
        </>
    )
}

export default Home