import React from "react"

import BaseBlockContent from "@sanity/block-content-to-react"
import Video from "./video"
import RichImage from "./richImage"
import Slideshow from "./slideshow"

const BlockRenderer = props => {
  const style = props.node.style || "normal"

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "")
    const idForLink = props.children[0].toLowerCase().replace(/ /, "_")
    switch (level) {
      case "1":
        return <h1 id={idForLink}>{props.children}</h1>
      case "2":
        return <h2>{props.children}</h2>
      case "3":
        return <h3>{props.children}</h3>
      case "4":
        return <h4>{props.children}</h4>
      case "5":
        return <h5>{props.children}</h5>
      case "6":
        return <h6>{props.children}</h6>

      default:
        return <h1>{props.children}</h1>
    }
  }

  return style === "blockquote" ? (
    <blockquote>{props.children}</blockquote>
  ) : (
    <p>{props.children}</p>
  )
}

const serializers = {
  types: {
    video({ node }) {
      return <Video node={node} />
    },
    richImage({ node: image }) {
      return <RichImage image={image} />
    },
    block(props) {
      return BlockRenderer(props)
    },
    slideshow({ node: { slides } }) {
      return <Slideshow slides={slides} />
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
