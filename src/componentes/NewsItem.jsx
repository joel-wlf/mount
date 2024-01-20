import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import NewsModal from "./NewsModal"

function NewsItem(props) {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return (
        <div className="news-article" onClick={() => (modalOpen ? closeModal() : openModal())}>
            <AnimatePresence initial={false} mode="wait">
                {modalOpen && <NewsModal modalOpen={modalOpen} handleClose={closeModal} />}
            </AnimatePresence>
            <div className="article-image">
                <img src={`news/${props.image}`} />
            </div>
            <div className="article-info">
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default NewsItem