import React from 'react';

const FooterTextBlock = ({ data }) => {

  return(
    <div className="footer__copyright text-white">
      {data && data?.allBlockContentFooterContent.nodes.map((content, i) =>
        <p className="text-center mb-0" key={i} dangerouslySetInnerHTML={{ __html: `${content.field_footer_text.value}` }}></p>
      )}
    </div>
  )
}

export default FooterTextBlock;