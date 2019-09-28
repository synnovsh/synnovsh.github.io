import React from "react"
import imageUrlBuilder from "@sanity/image-url"

import sanityConfig from "../../../studio/sanity.json"

const builder = imageUrlBuilder(sanityConfig.api)

export function imageUrlFor(source, maxWidth) {
  const base = builder.image(source)
  if (maxWidth) {
    return base.width(maxWidth).url()
  }
  return base.width(1000).url()
}

const RichImage = ({ image, maxWidth }) => {
  const {
    alt,
    asset: { id },
    caption,
  } = image

  const url = imageUrlFor(id, maxWidth)

  return (
    <figure>
      <img alt={alt} src={url} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default RichImage
