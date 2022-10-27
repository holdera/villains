import React, { useState, useEffect, useCallback } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import { Menu } from '@headlessui/react'

const Nav = () => {

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


    return(
        <nav className="">
            <Menu>
                <Menu.Button className="block md:hidden">Menu</Menu.Button>
                    <Menu.Items static className="hidden flex-col absolute right-0 w-[300px] p-5 bg-white md:flex md:flex-row md:justify-evenly md:w-full md:min-w-[900px] md:relative md:right-inherit">
                        {data &&
                            data?.menu?.nodes?.map((link) => (
                                <Menu.Item>
                                    <Link
                                        key={link.id}
                                        to={link.url.replace("/ahsokatano/web", "")}
                                    >
                                        {link.title}
                                    </Link>
                                </Menu.Item>
                        ))}
                    </Menu.Items>
            </Menu>
        </nav>
    )

}

export default Nav;