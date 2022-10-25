import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "@components/Container";
import FooterTextBlock from "@components/blocks/FooterTextBlock";

const Footer = () => {
  const data = useStaticQuery(graphql`
  query allFooterMenuItems {
    menu: allMenuItems(filter: {menu_name: {eq: "footer"}}) {
      nodes {
        id
        title
        url
        options {
          attributes {
            target
          }
        }
      }
    }
    allBlockContentFooterContent {
      nodes {
        field_footer_text {
          value
        }
      }
    }
  }
  `)

    return (
          <footer className="bg-[#111827] py-6 xl:py-8">
            <Container>
            <div className="m-auto footer__links flex justify-evenly w-full max-w-[900px]">
              { data && data?.menu?.nodes?.map((link)=> (
                            <a
                              className="text-white"
                              target={link?.options?.attributes?.target}
                              key={link.id}
                              href={link.url.replace('/ahsokatano/web', '')}
                            >
                              {link.title}
                            </a>
                        ))
                    }
              </div>
              <FooterTextBlock data={data} />
            </Container>
          </footer>
            
    );
};

export default Footer;
