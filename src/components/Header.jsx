import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Header = () => {
   return(
    <StaticQuery
    query={graphql`
        query {
            allNodePage {
                edges {
                  node {
                    id
                    title
                    path {
                      alias
                      pid
                      langcode
                    }
                  }
                }
              }
        }
    `}
    render={(data) => (
        <header>
            <div className="container">
                <div className="logo">Ahsoka Tano</div>
                <nav>
                    {/* fix page paths */}
                { data.allNodePage.edges.map((link)=> (
                        <Link 
                            key={link.node.id}
                            to={link.node.path.alias}
                        >{link.node.title}
                        </Link>
                    ))
                }
                </nav>
            </div>
        </header>
    )}
/>
)
};

export default Header;
