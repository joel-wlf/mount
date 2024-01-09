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
            <h1>Home</h1>
        </>
    )
}

export default Home