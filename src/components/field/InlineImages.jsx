import React from "react";
import { htmlParser } from "../../utils/html-parser"

export default function BodyInlineImages({ content, inlineImages }) {
  const parsedBody = htmlParser(content, inlineImages);

  return (
    <>
        {parsedBody}
    </>
  );
}
