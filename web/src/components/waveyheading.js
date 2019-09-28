import React from "react"
import styled from "styled-components"
import wave from "../icons/wave.svg"

const StyledWave = styled.div`
  display: inline-block;
  padding-bottom: calc(2em + 1vw) !important;
  background: url(${wave});
  background-position: 0 0;
  background-repeat: repeat-x;
  background-size: calc(2em + 1vw) calc(2em + 1vw);
  animation: move 10s linear infinite;
  animation-play-state: running;

  @keyframes move {
    from {
      background-position: 0px calc(1em + 1vw);
    }
    to {
      background-position: 300px calc(1em + 1vw);
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
