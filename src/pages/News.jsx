import Navbar from '../componentes/Navbar'
import { useBodyScroll, Button } from '@geist-ui/core'

function News() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
            </div>
        </>
    )
}

export default News