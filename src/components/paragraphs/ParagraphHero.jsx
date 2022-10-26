import React from 'react';
import Container from "../Container";
import { GatsbyImage } from "gatsby-plugin-image";

const ParagraphHero = ({heroSrc,heroText}) => {
    return(
        <section>
            <Container>
                <GatsbyImage
                    image={heroSrc}
                    alt={`Alt Cover text`}
                />
                <span>{heroText}</span>
            </Container>
        </section>
    )
}

export default ParagraphHero;