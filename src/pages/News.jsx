import { Button, useBodyScroll } from '@geist-ui/core';
import { ArrowDown01, ArrowUp10, Plus } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import NewsItem from '../components/NewsItem';
import newsData from '../data/newsData';

function News() {
  const [hidden, setHidden] = useBodyScroll();

  const [order, setOrder] = useState('desc');

  const [localArticles, setLocalArticles] = useState(() =>
    JSON.parse(localStorage.getItem('localArticles'))
  );

  function toggleScroll(state) {
    setHidden(state);
  }

  function toggleOrder() {
    order == 'desc' ? setOrder('asc') : setOrder('desc');
  }

  if (localArticles) {
    var articles = newsData.concat(localArticles);
  } else if (!localArticles) {
    var articles = newsData;
  }

  const compareDates = (a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));

    return order == 'desc' ? dateB - dateA : dateA - dateB;
  };

  articles.sort(compareDates);

  const articleItems = articles.map((article) => (
    <NewsItem key={article.title} handleScroll={setHidden} data={article} />
  ));

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>News</h2>
        <div className="news--actions">
          <Button width="78%" type="secondary" icon={<Plus />}>
            Post News
          </Button>
          <Button
            width="20%"
            onClick={toggleOrder}
            icon={order == 'desc' ? <ArrowUp10 /> : <ArrowDown01 />}
          ></Button>
        </div>
        <div className="news--articles">{articleItems}</div>
      </div>
    </>
  );
}

export default News;
