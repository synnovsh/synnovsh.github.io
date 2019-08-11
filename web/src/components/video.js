import React from "react"

const Video = ({ node }) => {
  const { url } = node.source.asset
  return (
    <>
      <video autoPlay loop muted playsInline src={url} />
    </>
  )
}

export default Video
