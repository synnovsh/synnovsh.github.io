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

const IndexPage = () => {
  console.log(`
  　　　∧_∧
  　　 (　･ω･)　Enjoy looking! 
  　 ＿|　⊃ (＿＿_
`)
  return (
  <Layout>
    <Main>
      <h1>Hello world.</h1>
      <p>I'm <Link to="/about/">Synnøve S. Halle</Link></p>
      <p>
        {`I write  `}
        <Link to="/projects/">code and design things</Link>
        {` and `}
        <Link to="/illustrations/">draw</Link>
        {` a little too.`}
      </p>
    </Main>
    <SEO title="Synnøve S. Halle" />
  </Layout>
)}

export default IndexPage
