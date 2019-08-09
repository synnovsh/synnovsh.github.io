import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichImage from "../components/richImage"
import BlockContent from "../components/blockContent"

export const query = graphql`
  query ProjectsQuery {
    projects: allSanityProject {
      edges {
        node {
          id
          mainImage {
            alt
            asset {
              id
            }
          }
          title
          slug {
            current
          }
          _rawDescription
        }
      }
    }
  }
`

const mapEdgesToNodes = data => {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

const projects = ({ data }) => {
  const projectNodes = mapEdgesToNodes(data.projects)
  return (
    <Layout>
      <SEO title="Projects" />
      {projectNodes.map(project => (
        <li key={project.id}>
          <ProjectItem project={project} />
        </li>
      ))}
    </Layout>
  )
}

const ProjectItem = ({ project }) => {
  const { mainImage, title, slug, _rawDescription } = project
  return (
    <>
      <RichImage image={mainImage} />
      <h1>{title}</h1>
      <Link to={`/project/${slug.current}`}>{title}</Link>
      <BlockContent blocks={_rawDescription} />
    </>
  )
}

export default projects
