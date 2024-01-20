import { useState } from "react"
import Modal from "./Modal"

function NewsItem(props) {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return (
        <div className="news-article" onClick={() => (modalOpen ? closeModal() : openModal())}>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={closeModal} />}
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