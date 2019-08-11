import React from "react"
import imageUrlBuilder from "@sanity/image-url"

import sanityConfig from "../../../studio/sanity.json"

const builder = imageUrlBuilder(sanityConfig.api)

export function imageUrlFor(source) {
  return builder.image(source)
}

const RichImage = ({ image }) => {
  const {
    alt,
    asset: { id },
    caption,
  } = image

  const url = imageUrlFor(id)

  return (
    <figure>
      <img alt={alt} src={url} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default RichImage
