import { graphql } from "gatsby"

export const ParagraphHero = graphql`
    fragment ParagraphHero on paragraph__hero {
        drupal_id
        field_hero {
            field_enable_hero
            field_hero_text {
                processed
                value
            }
        }
    }
`
