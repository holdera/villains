import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "@components/Layout";
import Container from "@components/Container";
import ArticleSummary from "@components/ArticleSummary";

export default function BlogEntries ({data}) {

    const articleData = data && data.allNodeArticle.nodes;
    
    function truncateString(str, num) {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
            return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...'
    }

    return(
        <Layout>
            <Container>
            <h1>Blog</h1>
            <div className="flex justify-between">
                {
                    articleData.map( (article, i) => {
                        console.log(article.title)
                        return <article className="w-[30%]" key={i}>
                                <ArticleSummary
                                    key={article.id}
                                    title={article.title}
                                    path={article.path.alias}
                                    image={article.relationships.field_image.localFile.url}
                                    alt={article.field_image.alt}
                                    summary={article.body.summary ? article.body.summary : truncateString(article.body.processed.toString().trim(), 250)}
                                />
                                
                            </article>
                    })
                }
            </div>
            </Container>
        </Layout>
    )
}

export const articleQuery = graphql`
    query {
        allNodeArticle(sort: {fields: created, order: DESC}) {
            nodes {
                id
                title
                body {
                    summary
                    processed
                }
                created
                path {
                    alias
                }
                field_image {
                    alt
                }
                relationships {
                    field_image {
                        localFile {
                            url
                        }
                    }
                }
            }
        }
    }
`;