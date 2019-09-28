import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blob from "../components/blob"

const Blobs = styled.div`
  display: flex;
  flex-direction: row;
`

const IndexPage = () => (
  <Layout>
    <Blobs>
      <Link to="/projects/">
        <Blob fill="royalBlue" text="Projects" />
      </Link>
      <Link to="/projects/">
        <Blob fill="red" text="Art" />
      </Link>
    </Blobs>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
