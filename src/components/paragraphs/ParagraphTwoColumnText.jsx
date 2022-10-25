import React from 'react';
import Container from "../Container";
import { graphql } from "gatsby";

// export const fragment = graphql`
// fragment ParagraphTwoColumnText on paragraph__two-cols {
//     id
//     text: field_text_demo {
//         format
//         processed
//         value
//     }
// }
// `;

const ParagraphTwoColumnText = ({data}) => {

    return (
        <section className='two-column'>
            <Container>
                {data?.allParagraphTwoColumnText.nodes.map((contents, i) => {
                    return <div className='flex justify-between' key={i}>
                            <div className='col-1 max-w-lg' dangerouslySetInnerHTML={{ __html: `${contents.field_first_column.value}` }}></div>
                            <div className='col-2 max-w-lg' dangerouslySetInnerHTML={{ __html: `${contents.field_second_column.value}` }}></div>
                        </div>
                })}
            </Container>
        </section>
    )
}

export default ParagraphTwoColumnText;