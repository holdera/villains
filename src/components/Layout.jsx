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
                    nodes {
                        relationships {
                            field_hero {
                            field_enable_hero
                            field_hero_text {
                                processed
                                value
                            }
                            }
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
                allParagraphTwoColumnText {
                    nodes {
                        field_first_column {
                            value
                        }
                        field_second_column {
                            value
                        }
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
