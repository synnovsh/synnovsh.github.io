import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

const Head = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: rgba(255,255,255, 0.9);
  border-bottom: 1px solid rgba(0,0,0,0.1);


  a {
    text-decoration: none;
  }
`
const Hamburger = styled.div`
  margin-right: 25px;
  input {
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    cursor: pointer;
    opacity: 0; 
    z-index: 2; 
  }

  span {
    &:not(:last-child) {
      margin-bottom: 6px;
    }
    display: block;
    width: 30px;
    height: 2px;
    position: relative;
    background: rgba(0,0,0,1);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    transform: rotate(45deg);
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
  }

  input:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg);
  }

  input:checked ~ a {
    color: red;
  }`

const Nav = styled.nav`
  // need both, one for transition, one for hiding it away from top
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
  position: absolute;
  top: 0; right:0;
  background-color: rgba(255,255,255,0.9);
  width: 100vw;
  height: 100vh;
  transition: opacity 0.5s, visibility 0.5s;
`

const NavItems = styled.ul` 
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  margin-right: 25px;
  
  li {
    margin-left: auto;
    margin-top: .5em;
    font-size: calc(1.8em + 1vw);
    a {
      text-align: right;
      color: inherit;
      &:hover {
        border-bottom: 2px solid #FFAC00;
      }
    }
  }
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
  width: 40px;
  height: 40px;
  margin: 10px 0px;
  margin-left: 25px;
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

const Header = () => {
  const [show, toggleShow] = useState(false);
  return (
    <Head>
      <Link to="/">
        <Logo>
          <span>{`$ `}</span>
          <div className="typewrite">ssh</div>
        </Logo>
      </Link>
      <Nav show={show}>
        <NavItems>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/illustrations">Illustrations</Link>
          </li>
        </NavItems>
      </Nav>
      <Hamburger>
          <input onClick={() => toggleShow(!show)} type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
    </Head>
  )
}

export default Header
