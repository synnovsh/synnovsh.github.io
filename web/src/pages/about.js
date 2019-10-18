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

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, auto) 500px minmax(0px, auto);
  @media screen and (min-width: 800px) {
    grid-template-columns: minmax(0px, 200px) 500px;
  }
`

const Body = styled.article`
  grid-area: 1/2;
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
      <Content>
      <Body>
        <h1>{title}</h1>
        {body && <BlockContent blocks={body} />}
      </Body>
      </Content>
    </Layout>
  )
}

export default IndexPage
