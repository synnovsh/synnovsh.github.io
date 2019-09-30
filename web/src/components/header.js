import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

const Head = styled.header``

const Nav = styled.nav`
  position: fixed;
  height: 50px;
`

const blink = keyframes`
  from, to { 
    border-color: transparent 
  }
  50% { 
    border-color: white; 
  }
`
const Logo = styled.div`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.9);
  width: 50px;
  height: 100%;
  text-decoration: none;
  color: white;
  font-family: monospace;
  padding: 10px;
  display: flex;
  align-items: center;
  aling-content: center;

  .typewrite {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 4px solid white;
    box-sizing: border-box;
    animation: ${blink} 1s step-end infinite;
  }
`

const Header = () => (
  <Head>
    <Nav>
      <Link to="/">
        <Logo>
          <span>{`$ `}</span>
          <div className="typewrite">ssh</div>
        </Logo>
      </Link>
    </Nav>
  </Head>
)

export default Header
