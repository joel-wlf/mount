import Navbar from '../componentes/Navbar'
import { useBodyScroll, Button, Spacer } from '@geist-ui/core'
import { SlidersHorizontal, Plus } from 'lucide-react'

function News() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                <h2>News</h2>
                <div className="news--actions">
                    <Button width="80%" type="secondary" icon={<Plus />}>Post News</Button>
                    <Button width="20%" icon={<SlidersHorizontal />}></Button>
                </div>
            </div>
        </>
    )
}

export default News