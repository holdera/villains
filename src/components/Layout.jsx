import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
    return (
        <StaticQuery
        query={graphql`
            query {
                site(siteMetadata: {}) {
                siteMetadata {
                    title
                    description
                }
                }
                allNodePage {
                    edges {
                        node {
                            title
                        }
                    }
                }
            }
            
        `}
            render={data => (
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{data.site.siteMetadata.title}</title>
                </Helmet>
                <Header />
                    <main id="main" className="main-content">
                        {children}
                    </main>
                <Footer />
            </>
            )}
        />
    );
};

export default Layout;
