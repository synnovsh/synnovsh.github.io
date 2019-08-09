import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

import RichImage from "../components/richImage"
import BlockContent from "../components/blockContent"
import SEO from "../components/seo"

export const query = graphql`
  query ProjectQuery($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      title
      _rawDescription(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      mainImage {
        asset {
          id
        }
        alt
      }
      tags {
        title
        id
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { project } = data

  const {
    title,
    _rawDescription: description,
    _rawBody: body,
    mainImage,
    tags,
  } = project

  return (
    <Layout>
      <SEO title={title} />
      <ul>{tags && tags.map(t => <li key={t.id}>{t.title}</li>)}</ul>
      <RichImage image={mainImage} />
      <BlockContent blocks={description} />
      <BlockContent blocks={body} />
    </Layout>
  )
}

export default ProjectTemplate
