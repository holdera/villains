import React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import Container from "@components/Container";
import Body from "@components/field/Body";
import Title from "@components/field/Title";


export default function Post({ data: { node } }) {
  return (
    <Layout>
      <Container addedClasses="mt-5">
        <Title>{node.title}</Title>
        <Body
          content={node?.body?.value}
          //content={node?.fields?.bodyProcessedWithInlineImages}
        />
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query nodePage($id: String) {
    node: nodePage(id: {eq: $id}) {
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