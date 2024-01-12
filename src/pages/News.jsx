import Navbar from '../componentes/Navbar'
import NewsItem from '../componentes/NewsItem'
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
                    <Button width="78%" type="secondary" icon={<Plus />}>Post News</Button>
                    <Button width="20%" icon={<SlidersHorizontal />}></Button>
                </div>
                <div className="news--articles">
                    <NewsItem title="Treffen Gartenverein" subtitle="Der Gartenverein lädt alle Bewohner zu einem gemeinsamen ..." image="gardening.jpg" />
                    <NewsItem title="Erntebericht 2028" subtitle="Der Erntebericht für 2028 ist veröffentlicht und kann aufgerufen werden ..." image="agrar.jpg" />
                    <NewsItem title="Winterverkauf Blumenladen" subtitle="Der Erntebericht für 2028 ist veröffentlicht und kann aufgerufen ..." image="flower-shop.jpg" />
                </div>
            </div>
        </>
    )
}

export default News