import React from "react"

import BaseBlockContent from "@sanity/block-content-to-react"
import Video from "./video"
import RichImage from "./richImage"

const serializers = {
  types: {
    video({ node }) {
      const { url } = node.source.asset
      return <Video hi="hello" src={url} />
    },
    richImage({ node: image }) {
      return <RichImage image={image} />
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
