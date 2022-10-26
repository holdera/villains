import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Container from "@components/Container";
const Header = () => {

    const data = useStaticQuery(graphql`
    query allMenuItems {
      menu: allMenuItems(filter: {menu_name: {eq: "main"}}) {
        nodes {
          id
          title
          url
        }
      }
    }
  `)

  return (
    <header className="py-5 border-b-2 border-[#233d61] border-solid">
      <Container>
          <div className="flex justify-between items-center">
              <div className="prose prose-2xl font-bold text-[#233d61]">Ahsoka Tano</div>
              <nav className="flex justify-evenly w-full max-w-[900px]">
                  {data &&
                      data?.menu?.nodes?.map((link) => (
                          <Link
                              key={link.id}
                              to={link.url.replace("/ahsokatano/web", "")}
                          >
                              {link.title}
                          </Link>
                    ))}
              </nav>
          </div>
      </Container>
    </header>
  );
};

export default Header;
