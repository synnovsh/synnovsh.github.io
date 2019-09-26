import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blob from "../components/blob"

const IndexPage = () => (
  <Layout>
    <Blob fill="royalBlue"/>
    <SEO title="Home" />
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default IndexPage
