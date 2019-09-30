import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockContent from "../components/blockContent"

export const query = graphql`
  query AboutQuery {
    page: sanityPage(slug: { current: { eq: "about" } }) {
      id
      title
      _rawBody
    }
  }
`

const IndexPage = ({ data }) => {
  const { page } = data

  if (!page) {
    return "oops"
  }

  const { title, _rawBody: body } = page

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      {body && <BlockContent blocks={body} />}
    </Layout>
  )
}

export default IndexPage
