import { graphql } from "gatsby"

export const ParagraphImage = graphql`
    fragment ParagraphReferenceLinks on paragraph__reference__links {
        relationships {
            field_reference_links {
                field_ref_link {
                    title
                    uri
                }
            }
        }
    }
`;
