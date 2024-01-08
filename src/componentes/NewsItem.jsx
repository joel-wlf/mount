import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NewsItem(props) {
    
    return (
        <div className="news-article">
            <div style={{backgroundImage: `url(/news/${props.image})`, backgroundRepeat: "no-repeat", backgroundSize: "200%", backgroundPosition: "center", borderRadius: "10px"}}></div>
            <div className="article-info">
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default NewsItem