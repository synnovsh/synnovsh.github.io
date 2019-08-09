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
  } = image

  const url = imageUrlFor(id)

  return <img alt={alt} src={url} />
}

export default RichImage
