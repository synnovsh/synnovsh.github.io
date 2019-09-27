import React from "react"
import styled from "styled-components"

const StyledBlobHeading = styled.div`
  svg {
    width: 50%;
    height: 50%;
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

  #Circle1 {
    animation: from0to360 1s linear infinite;
    cx: 150;
    cy: 145;
    r: 130;
    transform-origin: 145px 150px;
  }

  @keyframes from360to0 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  #Circle2 {
    animation: from360to0 2s linear infinite;
    cx: 150;
    cy: 155;
    r: 130;
    transform-origin: 155px 150px;
  }

  #Circle3 {
    animation: from0to360 3s linear infinite;
    cx: 145;
    cy: 150;
    r: 130;
    transform-origin: 150px 145px;
  }

  #Circle4 {
    animation: from360to0 2.5s linear infinite;
    cx: 155;
    cy: 150;
    r: 130;
    transform-origin: 150px 155px;
  }
`

const Blob = ({ fill }) => {
  return (
    <StyledBlobHeading>
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
        <circle id="Circle1" />
        <circle id="Circle2" />
        <circle id="Circle3" />
        <circle id="Circle4" />
      </AnimatedBlob>
    </StyledBlobHeading>
  )
}

export default Blob
