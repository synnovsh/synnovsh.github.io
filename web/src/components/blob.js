import React from "react"
import styled from "styled-components"

const StyledBlobHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: absolute;
    text-decoration: underline;
    z-index: 1;
  }
  svg {
    width: 100%;
    height: auto;
  }
`

const AnimatedBlob = styled.svg`
  @keyframes from0to360 {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes from360to0 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  #circle1 {
    animation: from0to360 1s linear infinite;
  }

  #circle2 {
    animation: from360to0 2s linear infinite;
  }

  #circle3 {
    animation: from0to360 3s linear infinite;
  }

  #circle4 {
    animation: from360to0 2.5s linear infinite;
  }
`

const Circle = styled.circle`
  transform-origin: ${props => props.cy}px ${props => props.cx}px;
`

const Blob = ({ fill, text }) => {
  const r = 130
  const basecx = 150
  const basecy = 150
  const max = 5
  const randDirection = () => Math.round(Math.random()) * 2 - 1
  const randOffset = () =>
    Math.floor(Math.random() * Math.floor(max)) * randDirection()
  return (
    <StyledBlobHeading>
      <h1>{text}</h1>
      <AnimatedBlob
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        filter="url(#goo)"
        fill={fill && `${fill}`}
      >
        <defs>
          <filter id="goo">
            {"<!-- tympanus.net/codrops/creative-gooey-effects -->"}
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <Circle r={r} cx={basecx} cy={basecy} />

        <Circle
          id="circle1"
          r={r}
          cx={basecx + randOffset()}
          cy={basecy + randOffset()}
        />
        <Circle
          id="circle2"
          r={r}
          cx={basecx + randOffset()}
          cy={basecy + randOffset()}
        />
        <Circle
          id="circle3"
          r={r}
          cx={basecx + randOffset()}
          cy={basecy + randOffset()}
        />
        <Circle
          id="circle4"
          r={r}
          cx={basecx + randOffset()}
          cy={basecy + randOffset()}
        />
      </AnimatedBlob>
    </StyledBlobHeading>
  )
}

export default Blob
