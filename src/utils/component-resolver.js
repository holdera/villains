import React from 'react';
import ParagraphReferenceLinks from "@components/paragraph/paragraph-reference-links";

const Resolve = (component) => {
    if (component.__typename.includes(`paragraph__reference__links`)) {
        return (
            <ParagraphReferenceLinks Links={component.relationships.field_reference_links.field_ref_link.uri} />
        )
    }

    return <></>
}

export const componentResolver = (data = []) => {
    const components = []

    data.forEach((component) => {
        components.push(resolve(component))
    })

    return components
}

export default componentResolver;