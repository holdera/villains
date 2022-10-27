import React from 'react';
import Container from "@components/Container";

const CtaBlock = ({ data }) => {

    const styles = 'text-[#ffffff] text-center text-md font-bold';

    return(
        <div className='bg-[#233d61] text-[#233d61] py-6 mt-10'>
            <Container addedClasses={styles}>
                { data && data?.allBlockContentCtaBlock.nodes.map((item) => { 
                    return <div key={item.id}>
                        <h3  className={[styles, 'text-xl']}>{item.field_cta_heading}</h3>
                        <div className='flex flex-col md:flex-row md:justify-around md:mt-6 md:mb-4'>
                            {item.field_cta_link.map((link,i) => {
                                return <a key={`${item.id}-${i}`} className='bg-[#ffffff] border-2 border-transparent border-solid text-[#233d61] py-2 px-4 font-bold text-center min-w-[200px] no-underline mb-3 hover:border-[#ffffff] hover:bg-[#233d61] hover:text-[#ffffff] md:mb-0' rel="noreferrer" target='_blank' href={link.uri}>{link.title}</a>
                            })}
                        </div>
                    </div>
                })}
            </Container>
        </div>
    )
}

export default CtaBlock;
