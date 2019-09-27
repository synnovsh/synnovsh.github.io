import React from "react"
import styled from "styled-components"
import wave from "../icons/wave.svg"

const StyledWave = styled.div`
  display: inline-block;
  padding-bottom: calc(3em + 1vw) !important;
  background: url(${wave});
  background-position: 0 0;
  background-repeat: repeat-x;
  background-size: calc(3em + 1vw) calc(3em + 1vw);
  animation: move 7s linear infinite;
  animation-play-state: running;

  @keyframes move {
    from {
      background-position: 2px 1em;
    }
    to {
      background-position: 500px 1em;
    }
  }
`

const WaveyHeading = ({ text }) => {
  return (
    <StyledWave>
      <h1>{text}</h1>
    </StyledWave>
  )
}

export default WaveyHeading
