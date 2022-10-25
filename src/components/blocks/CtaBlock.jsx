import React from 'react';
import Container from "@components/Container";
import { graphql } from 'gatsby';

const CtaBlock = ({ data }) => {

    const styles = 'text-[#ffffff] text-center text-md font-bold';

    return(
        <div className='bg-[#233d61] text-[#233d61] py-6 mt-10'>
            <Container addedClasses={styles}>
                { data && data?.allBlockContentCtaBlock.nodes.map((item) => {
                    return <>
                    <h3 key={item.id} className={[styles, 'text-xl']}>{item.field_cta_heading}</h3>
                    <div className='flex justify-around mt-6 mb-4'>
                        {item.field_cta_link.map((link,i) => { 
                            return <a key={`${item.id}-${i}`} className='bg-[#ffffff] border-2 border-transparent border-solid text-[#233d61] py-2 px-4 font-bold text-center min-w-[200px] no-underline hover:border-[#ffffff] hover:bg-[#233d61] hover:text-[#ffffff]' href={link.uri}>{link.title}</a>
                        })}
                    </div>
                    </>
                })}
            </Container>
        </div>
    )
}

export default CtaBlock;
