import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import CtaBlock from "@components/blocks/CtaBlock";
// import ParagraphTwoColumnText from "@components/paragraphs/ParagraphTwoColumnText"
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
    return (
        <StaticQuery
        query={graphql`
            query {
                allNodePage {
                    edges {
                        node {
                            title
                        }
                    }
                }
                allBlockContentCtaBlock {
                    nodes {
                        id
                        field_cta_link {
                        title
                        uri
                        }
                        field_cta_heading
                    }
                }
            }
            
        `}
            render={data => (
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title></title>
                </Helmet>
                <Header />
                    <main id="main" className="main-content min-h-[750px] h-ful w-full mt-12">
                        {children}
                        {/* <ParagraphTwoColumnText data={data} /> */}
                    </main>
                <CtaBlock data={data} />
                <Footer />
            </>
            )}
        />
    );
};

export default Layout;
