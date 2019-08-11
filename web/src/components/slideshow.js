import React, { useState } from "react"
import styled from "styled-components"

import RichImage from "./richImage"
import arrowRight from "./arrow-right.svg"
import arrowLeft from "./arrow-left.svg"

const Slideshower = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100vh;
  overflow: hidden;
`

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  button {
    width: 40px;
    height: 40px;
  }

  span {
    margin: 0 5px;
  }
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(999, 999, 999, 0);
  ${props => props.disabled && "visibility: hidden;"}
  width: 50px;
  height: 50px;

  &:focus {
    outline: 0;
  }

  img {
    height: 50%;
    width: 50%;
    padding: 0 !important;
    margin: 5px;
  }
`

const ArrowButton = ({ direction, onClick, disabled }) => {
  const isRight = direction === "right"
  const image = isRight ? arrowRight : arrowLeft
  const text = isRight ? "next" : "prev"
  return (
    <Button
      isRight={isRight}
      type="button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      <img src={image} alt={text} />
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
        <span>{`${index + 1} / ${len}`}</span>
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
