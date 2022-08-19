import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Header = () => {
   return(
    <header>coming soon</header>
//     <StaticQuery
//     query={graphql`
//         query {
//             allMenuLinkContentMenuLinkContent(
//                 sort: { fields: [weight], order: ASC },
//                 filter: {menu_name: {eq: "main"}}
//             ) {
//                 edges {
//                     node {
//                         id
//                         title
//                         menu_name
//                         link {
//                             uri
//                         }
//                     }
//                 }
//             }
//         }
//     `}
//     render={(data) => (
//         <header>
//             <div className="container">
//                 <div className="logo">Ahsoka Tano</div>
//                 <nav>
//                     {/* fix page paths */}
//                 { data.allMenuLinkContentMenuLinkContent.edges.map((link)=> (
//                         <Link 
//                             key={link.node.id}
//                             to={link.node.link.uri}
//                         >{link.node.title}
//                         </Link>
//                     ))
//                 }
//                 </nav>
//             </div>
//         </header>
//     )}
// />
)
};

export default Header;
