import React from "react"
import styled from "styled-components"

const StyledVideo = styled.video`
  max-width: ${props => (props.orientation === "vertical" ? "50" : "100")}%;
`

const Video = ({ node }) => {
  const { orientation } = node
  const { url } = node.source.asset

  return (
    <StyledVideo
      orientation={orientation}
      autoPlay
      loop
      muted
      playsInline
      src={url}
    />
  )
}

export default Video
