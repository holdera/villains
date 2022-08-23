import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import '../styles/main.scss';

const Layout = ({ children }) => {
    return (
        <StaticQuery
        query={graphql`
            query MyQuery {
                site(siteMetadata: {}) {
                siteMetadata {
                    title
                    description
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
                        <div className="container">
                            {children}
                        </div>
                    </main>
                <Footer />
            </>
            )}
        />
    );
};

export default Layout;
