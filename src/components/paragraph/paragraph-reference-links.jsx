import React from 'react';
import { Link } from 'gatsby';

const ParagraphReferenceLinks = ({Links}) => {
    return(
        <section className='reference-links'>
            <h3>References</h3>
            <ul>
                {Links.map((link,i) => {
                    <Link key={i} to={link.uri}>{link.title}</Link>
                })}
            </ul>
            ok
        </section>
    )
}

export default ParagraphReferenceLinks;