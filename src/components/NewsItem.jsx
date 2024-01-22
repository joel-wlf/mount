import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import NewsModal from './NewsModal';

function NewsItem(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    props.handleScroll(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    props.handleScroll(false);
  };

  return (
    <div
      className="news-article"
      onClick={() => (modalOpen ? closeModal() : openModal())}
    >
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <NewsModal
            data={props.data}
            modalOpen={modalOpen}
            handleClose={closeModal}
          />
        )}
      </AnimatePresence>
      <div className="article-image">
        {props.data.type == 'static' ? (
          <img src={`news/${props.data.image}`} />
        ) : (
          <img src={`data:image/jpeg;base64,${props.data.image}`} />
        )}
      </div>
      <div className="article-info">
        <h4>{props.data.title}</h4>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
