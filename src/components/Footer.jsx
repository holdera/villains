import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Footer = () => {
    return (
        <footer>
            Footer
        </footer>
        // <StaticQuery
        // query={graphql`
        //     query {
        //         allMenuLinkContentMenuLinkContent(
        //             sort: { fields: [weight], order: ASC },
        //             filter: {menu_name: {eq: "footer"}}
        //         ) {
        //             edges {
        //                 node {
        //                     id
        //                     title
        //                     menu_name
        //                     link {
        //                         uri
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // `}
        //     render={(data) => {
        //         <footer>
        //             <div className="footer__links">
        //                 {data.allMenuLinkContentMenuLinkContent.edges.map(
        //                     (link) => (
        //                         <Link
        //                             key={link.node.id}
        //                             to={link.node.link.uri}>
        //                             {link.node.title}
        //                         </Link>
        //                     )
        //                 )}
        //             </div>
        //         </footer>;
        //     }}
        // />
    );
};

export default Footer;
