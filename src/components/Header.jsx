import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Container from "@components/Container";
const Header = () => {
   return(
    <StaticQuery
    query={graphql`
        query {
            allNodePage(sort: {fields: path___pid}) {
                edges {
                  node {
                    id
                    title
                    path {
                      alias
                      pid
                    }
                  }
                }
              }
        }
    `}
    render={(data) => (
        <header>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="prose prose-2xl">Ahsoka Tano</div>
                    <nav className="flex justify-evenly w-full max-w-[900px]">
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
            </Container>
        </header>
    )}
/>
)
};

export default Header;
