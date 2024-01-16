function NewsItem(props) {
    return (
        <div className="news-article">
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