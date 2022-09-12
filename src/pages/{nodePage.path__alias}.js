import React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import Container from "@components/Container";
import Body from "@components/field/Body";
import Title from "@components/field/Title";
// import InlineImages from "@components/field/InlineImages";
import ParagraphReferenceLinks from "@components/paragraph/paragraph-reference-links";
export default function Post({ data: { node } }) {
  return (
    <Layout>
      <Container addedClasses="mt-5">
        <Title>{node.title}</Title>
        <Body
          content={node?.body?.value}
          //content={node?.fields?.bodyProcessedWithInlineImages}
        />
         <ParagraphReferenceLinks />
        {/* <InlineImages
          content={node?.body?.processed}
          inlineImages={node.fields.inlineImages}
        /> */}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query nodePage($id: String) {
    node: nodePage(id: {eq: $id}) {
      title
      path {
        alias
      }
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