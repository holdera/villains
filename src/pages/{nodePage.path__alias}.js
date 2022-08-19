import React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import Body from "@components/field/Body";
import Title from "@components/field/Body";

export default function Post({ data: { node } }) {
  return (
    <Layout>
      <section className="prose prose-lg max-w-6xl mx-auto">
        <Title>{node.title}</Title>
        <Body
          content={node?.body?.processed}
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query nodePage($id: String) {
    node: nodePage(id: {eq: $id}) {
      title
      body {
        processed
      }
    }
  }
`