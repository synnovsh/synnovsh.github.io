import React, { useState } from "react"
import styled from "styled-components"

import RichImage from "./richImage"

const Slideshower = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
`

const Slidelist = styled.ul`
  width: ${props => props.length * 100}%;
  display: flex;
  flex-direction: row;
`

const Slide = styled.li`
  max-height: 100vh;
  width: 100%;
  transform: translate3d(-${props => props.index * 100}%, 0, 0);
  transition: transform 300ms;
  }
`

const Controls = styled.div`
  margin-top: 1em;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button`
  ${props => props.disabled && "visibility: hidden;"}
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.9);
  outline: 0;
  padding: 0;

   {
    cursor: pointer;
  }
`

const Arrow = ({ direction }) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.49 22.14"
    width="50%"
    fill="white"
    transform={direction === "left" ? "rotate(-180)" : ""}
  >
    <title>ssh arrow</title>
    <path d="M47.2.33A1.12,1.12,0,0,0,45.62,1.9l8,8H1.11A1.11,1.11,0,0,0,0,11.06a1.12,1.12,0,0,0,1.11,1.13H53.67l-8,8a1.14,1.14,0,0,0,0,1.59,1.11,1.11,0,0,0,1.59,0l10-10a1.09,1.09,0,0,0,0-1.57Z" />
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
    <Slideshower className="slideshow">
      <Slidelist length={len}>
        {slides.map(slide => (
          <Slide length={len} index={index} key={slide._key}>
            <RichImage image={slide} />
          </Slide>
        ))}
      </Slidelist>
      <Controls>
        <ArrowButton
          direction="left"
          onClick={() => handlePrev()}
          disabled={index === 0}
        />
        <span>{`${index + 1}/${len}`}</span>
        <ArrowButton
          direction="right"
          onClick={handleNext}
          disabled={index === len - 1}
        />
      </Controls>
    </Slideshower>
  )
}

export default Slideshow
