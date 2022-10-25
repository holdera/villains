import React from 'react';
import { Link } from "gatsby";

const ArticleSummary = ({title, path, summary, image, alt}) => {
    return(
        <div className='article-summary'>
            <div className="relative h-[200px] w-full overflow-hidden">
                <img className="absolute top-0 m-auto h-full" src={image} alt={alt} />
            </div>
            <Link to={path}><h3>{title}</h3></Link>
            <p dangerouslySetInnerHTML={{__html: summary}} />
            <Link to={path}>Read More</Link> 
        </div>
    )
}

export default ArticleSummary