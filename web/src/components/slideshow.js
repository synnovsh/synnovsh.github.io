import React, { useState } from "react"
import styled from "styled-components"

import RichImage from "./richImage"

const Slideshower = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100vh;
  overflow: hidden;
`

const Slidelist = styled.ul`
  width: ${props => props.length * 100}%;
  display: flex;
  flex-direction: row;
`

const Slide = styled.li`
  width: 100%;
  transform: translate3d(-${props => props.index * 100}%, 0, 0);
  transition: transform 300ms;
  }

  figure {
    margin-top: 0 !important;
  }
`

const Controls = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 666;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  ${props => props.disabled && "visibility: hidden;"}
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  outline: 0;
  padding: 0;

   {
    cursor: pointer;
  }
`

const Arrow = ({ direction }) => (
  <svg
    height="32px"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 32 32"
    width="32px"
    transform={direction === "left" && "rotate(-180)"}
  >
    <path
      d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"
      fill="white"
      fillOpacity="0.4"
    />
  </svg>
)

const ArrowButton = ({ direction, onClick, disabled }) => {
  return (
    <Button type="button" onClick={() => onClick()} disabled={disabled}>
      <Arrow direction={direction} />
    </Button>
  )
}

const Slideshow = ({ slides }) => {
  const len = slides.length
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex(Math.max(index - 1, 0))
  }
  const handleNext = () => {
    setIndex(Math.min(index + 1, len - 1))
  }

  return (
    <Slideshower>
      <Controls>
        <ArrowButton
          direction="left"
          onClick={() => handlePrev()}
          disabled={index === 0}
        />
        <ArrowButton
          direction="right"
          onClick={handleNext}
          disabled={index === len - 1}
        />
      </Controls>
      <Slidelist length={len}>
        {slides.map(slide => (
          <Slide length={len} index={index} key={slide._key}>
            <RichImage image={slide} />
          </Slide>
        ))}
      </Slidelist>
    </Slideshower>
  )
}

export default Slideshow
