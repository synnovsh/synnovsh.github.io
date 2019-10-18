import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "typeface-montserrat"
import "typeface-lato"
import "./normalize.css"
import "./reset.css"
import "./typography.css"

import Header from "./header"

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  grid-template-rows: auto 1fr auto;

  header {
    grid-area: 1/2;
  }

  footer {
    grid-area: 3/2;
  }
`

const Content = styled.div`
  grid-area: 2/2;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    padding-top: 150px;
    img {
      max-width: 100%;
    }
  }

  a {
    text-decoration: none;
  }

  p > a {
    color: inherit;
    border-bottom: 2px solid #FFAC00;
    &:hover {
      opacity: 0.9;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
      </Content>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
