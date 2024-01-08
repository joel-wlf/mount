import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NewsItem(props) {
    
    return (
        <div className="news-article">
            <div className="img-wrapper" style={{backgroundImage: "url(profile-pic.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "150%", backgroundPosition: "center"}}>
            </div>
        </div>
    )
}

export default NewsItem