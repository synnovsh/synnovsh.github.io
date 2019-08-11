import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichImage from "../components/richImage"
import BlockContent from "../components/blockContent"

export const query = graphql`
  query ProjectsQuery {
    projects: allSanityProject(sort: { fields: creationDate }) {
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
          creationDate
          slug {
            current
          }
          _rawDescription
          category {
            name
          }
        }
      }
    }
  }
`

const mapEdgesToNodes = data => {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

const List = styled.ul`
  margin: 0;
  list-style-type: none;
`

const projects = ({ data }) => {
  const projectNodes = mapEdgesToNodes(data.projects)
  return (
    <Layout>
      <SEO title="Projects" />
      <List>
        {projectNodes.map(project => (
          <li className="project" key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </List>
    </Layout>
  )
}

const minColumnWidth = 300
const imageWidth = 400

const Item = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${minColumnWidth}px, 1fr));
  align-content: center;
  justify-items: center;

  width: 100%;
  a {
    text-decoration: none;
  }
  img {
    max-width: ${imageWidth}px;
    width: 100%;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: ${minColumnWidth}px;
  justify-content: center;

  @media only screen and (max-width: ${minColumnWidth * 2}px) {
    align-items: center;
    width: 100%;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  p {
    color: rgba(0, 0, 0, 0.5);
  }
`

const ProjectItem = ({ project }) => {
  const { mainImage, title, slug, _rawDescription } = project
  return (
    <Item>
      <Info>
        <Link to={`/project/${slug.current}`}>
          <h1>{title}</h1>
        </Link>
        <BlockContent blocks={_rawDescription} />
      </Info>
      <Link to={`/project/${slug.current}`}>
        <RichImage image={mainImage} />
      </Link>
    </Item>
  )
}

export default projects
