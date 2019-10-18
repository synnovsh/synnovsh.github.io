import React, { useState } from "react"
import styled from "styled-components"

import RichImage from "./richImage"

const Slideshower = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  span {
    color: rgba(0, 0, 0, 0.3);
  }
`

const Slidelist = styled.ul`
  width: ${props => props.length * 100}%;
  display: flex;
  flex-direction: row;
  list-style: none !important;
  margin-left: 0 !important;
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
  justify-content: flex-start;
  align-items: center;
`

const Button = styled.button`
  ${props => props.disabled && "visibility: hidden;"}
  width: 50px;
  height: 50px;
  outline: 0;
  border: none;
  padding: 0;

   {
    cursor: pointer;
  }
`

const ArrowButton = ({ direction, onClick, disabled }) => {
  return (
    <Button type="button" onClick={() => onClick()} disabled={disabled}>
      <span>{direction==="left" ? '←' : '→'}</span>
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
