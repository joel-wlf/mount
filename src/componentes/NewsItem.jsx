function NewsItem(props) {
    return (
        <div className="news-article">
            <div style={{backgroundRepeat: "no-repeat", backgroundSize: "200%", backgroundPosition: "center", borderRadius: "10px", maxHeight: "100%"}}>
                <img src={`news/${props.image}`} style={{borderRadius: "10px", height: "85%"}} />
            </div>
            <div className="article-info">
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default NewsItem