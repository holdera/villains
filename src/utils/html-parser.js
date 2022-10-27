import React from "react";
import parse from "html-react-parser";
import { GatsbyImage } from "gatsby-plugin-image";

export const htmlParser = (content, inlineImages = []) => {
    const options = {
        decodeEntities: true,
        transform: (htmlnode) => {
            if (htmlnode.type === "tag" && htmlnode.name === "img") {
                const inlineImage = inlineImages.find((inlineImage) => {
                    return htmlnode.attribs.src === inlineImage.originalImageUrl;
                });

                if (inlineImage) {
                    return (
                        <GatsbyImage
                            image={inlineImage.localFile.childImageSharp.gatsbyImageData}
                            className='mx-auto'
                        />
                    );
                }

                return;
            }
        },
    };

    return parse(content, options);
};

export default htmlParser;
