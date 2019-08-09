import React from "react"

const Video = ({ src }) => {
  return <video autoPlay loop muted playsInline src={src} />
}

export default Video
