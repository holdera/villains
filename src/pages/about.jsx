import { graphql } from "gatsby"
import * as React from "react"

const About = ({ data }) => {
    const aboutPage  = data.allNodePage.edges[0].node;
    return (
        <main>
            <h1>{aboutPage.title}</h1>
            <div dangerouslySetInnerHTML={{__html: aboutPage.body.value}}></div>
        </main>
    )
}

export const query = graphql`
query {
    allNodePage (
      filter: { drupal_id: { eq: "653d2378-2411-4dc6-8786-fe7e402bd62a"}}){
      edges {
        node {
          drupal_id
          title
          body {
            value
          }
          
        }
      }
    }
  }
`

export default About;