import React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import Container from "@components/Container";
import Body from "@components/field/Body";
import Title from "@components/field/Title";

export default function Post({data: {node}}) {
    return (
        <Layout>
            <Container addedClasses="mt-5">
                <Title>{node.title}</Title>
                <Body
                    content={node?.fields?.bodyProcessedWithInlineImages}
                />
            </Container>
        </Layout>
    );
}

export const query = graphql`
    query nodeArticle($id: String) {
        node: nodeArticle(id: {eq: $id}) {
            title
            body {
                processed
                value
            }
            fields {
                bodyProcessedWithInlineImages
            }
        }
    }
`