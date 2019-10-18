import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockContent from "../components/blockContent"


export const query = graphql`
  query AboutQuery {
    page: sanityPage(slug: { current: { eq: "about" } }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const Body = styled.article`
  max-width: 500px;
  h1 {
    margin-bottom: .5em;
  }
  p {
    margin-bottom: 1.5em;
  }

  b, strong {
    font-weight: bold;
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
      <Body>
        <h1>{title}</h1>
        {body && <BlockContent blocks={body} />}
      </Body>
    </Layout>
  )
}

export default IndexPage
