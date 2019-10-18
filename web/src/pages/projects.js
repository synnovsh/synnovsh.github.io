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

const maxWidth = 1000

const List = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, auto) minmax(0, ${maxWidth}px) minmax(
      0px,
      auto
    );

  ul {
    grid-area: 1/2;
    margin: 0;
    list-style-type: none;
  }
`

const projects = ({ data }) => {
  const projectNodes = mapEdgesToNodes(data.projects)
  return (
    <Layout>
      <SEO title="Projects" />
      <List>
        <ul>
          {projectNodes.map(project => (
            <li className="project" key={project.id}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </List>
    </Layout>
  )
}

const Item = styled.article`
  
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 600px) {
  display: grid;
  grid-template-columns: 45% 50%;
  column-gap: 5%;
  
  }

  figure {
    transition: transform 0.5s;
    &:hover {
      width: 20
      transform: scale(0.95);
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;

  @media screen and (min-width: 600px) {
    border-bottom: 1px solid rgba(225, 225, 255, 0.9);
  }

  a {
    text-decoration: none;
  }

  h1 {
    text-transform: uppercase;
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
