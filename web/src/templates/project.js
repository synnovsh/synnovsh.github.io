import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

import "typeface-playfair-display"

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
      category {
        name
      }
      stack
      live
      code
    }
  }
`

const ProjectArticle = styled.article`
`

const ProjectInfo = styled.section`
  display: flex;
  flex-direction: column;
`

const BodySection = styled.section`
  display: grid;
  grid-template-columns: minmax(25px, auto) minmax(0, 800px) minmax(25px, auto);
  width: 100%;

  padding-top: 50px;
  background-color: #f2f7ef;
`

const Content = styled.div`
  grid-area: 1/2;
  backgroud-color: #f2f7ef !important;

  h1 {
    margin-top: 1em;
    font-family: playfair-display;
    font-weight: 800;
  }

  p {
    max-width: 500px;
    margin-top: 1.5em;
  }

  a {
    color: inherit;
  }

  video,
  img {
    max-height: 80vh;
  }

  video {
    display: inline-block;
    text-align: center;
  }

  figure {
    margin-top: 1.5em;
    display: inline-flex;
    flex-flow: row wrap;
    width: 100%;

    figcaption {
      padding: 30px 0 0 30px;
      flex: 1 0 70px;
    }

    img {
      object-fit: scale-down;
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { project } = data

  const {
    title,
    _rawBody: body,
    mainImage,
    category,
    stack,
    live,
    code,
  } = project
  return (
    <Layout>
      
      <ProjectArticle>
        <ProjectInfo>
          <div>
            <h1>{title}</h1>
            <RichImage image={mainImage} />
          </div>
          <div>
            {category && category}
            {stack && (
              <ul>
                {stack.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
            {code && code}
            {live && live}
          </div>
        </ProjectInfo>
        <BodySection>
          <Content>
            <BlockContent blocks={body} />
          </Content>
        </BodySection>
      </ProjectArticle>
    </Layout>
  )
}

export default ProjectTemplate
