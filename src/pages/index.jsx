import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({data}) => {
  console.log(data.allNodePage)
  //deconstruct
  const homePage = data.allNodePage.edges[0].node;
  return (
    <main>
      <title>Home Page</title>
      <h1>{homePage.title}</h1>
      <div dangerouslySetInnerHTML={{__html: homePage.body.value}}></div>
    </main>
  )
}

export const query = graphql`
  query {
    allNodePage (
      filter: { drupal_id: { eq: "b014e52b-f6fa-43a2-9324-3edd7dca2921"}}){
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
export default IndexPage
