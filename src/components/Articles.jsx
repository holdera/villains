import React from "react";
import { graphql } from "gatsby";
import ArticleSummary from "@components/ArticleSummary";

const Articles = ({data}) => {
    const articleData = data && data.allNodeArticle.nodes;
    return(
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
                                summary={article.body.summary ? article.body.summary : article.body.processed.subString(0, 300)}
                            />
                            
                        </article>
                })
            }
        </div>
    )
}

export const data = graphql(`
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
`)

export default Articles