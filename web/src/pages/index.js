import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Main = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  p {
    font-size: calc(1em + 1vw);
  }
`

const IndexPage = () => (
  <Layout>
    <Main>
      <h1>Hello world.</h1>
      <p>This site is currently under construction.</p>
      <p>
        {`You can check out my `}
        <Link to="/projects/">Projects</Link>
        {` while you're here.`}
      </p>
    </Main>
    <SEO title="Synnøve S. Halle" />
  </Layout>
)

export default IndexPage
