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

const Gutter = styled.div`
`

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    flex: 1;
    padding-top: 100px;
    img {
      max-width: 100%;
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
    <Gutter>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
      </Content>
      <footer>{`© ${new Date().getFullYear()}`}</footer>
    </Gutter>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
