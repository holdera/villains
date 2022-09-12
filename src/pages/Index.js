import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from "@components/Layout";
import Container from "@components/Container";
import ParagraphReferenceLinks from "@components/paragraph/paragraph-reference-links";

const Index = () => {
    return(
        <StaticQuery
            query={graphql`
                query {
                    allNodePage(filter: {id: {eq: "6dbf02df-46c2-59c6-89c3-3b3ae7ef4977"}}) {
                        edges {
                          node {
                            body {
                              value
                            }
                            id
                            path {
                              alias
                            }
                          }
                        }
                    }
                }
        `}
            render={(data) => (
                <Layout>
                    <Container addedClasses="mt-5">
                        <div className='home__content'>
                            <ParagraphReferenceLinks />
                        </div>
                    </Container>
                </Layout>
            )}
        />
    )
}

export default Index;