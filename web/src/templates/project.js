import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
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

const ProjectArticle = styled.article``

const ProjectInfo = styled.section`
  display: flex;
  flex-direction: row;
`

const BodySection = styled.section`
  display: grid;
  grid-template-columns: minmax(25px, auto) minmax(0, 800px) minmax(25px, auto);
  width: 100%;

  padding-top: 50px;
`

const Content = styled.div`
  grid-area: 1/2;

  h1,
  h2,
  p {
    margin-bottom: 1em;
  }

  video,
  img {
    margin: 4em 0;
  }

  h2 {
    padding-bottom: 0.2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  p {
    max-width: 500px;
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
  }

  figure {
    display: inline-flex;
    flex-flow: row wrap;
    width: 100%;

    figcaption {
      padding: 4em 0 0 1em;
      flex: 1 0 70px;
    }

    img {
      object-fit: scale-down;
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { project } = data

  const { title, _rawBody: body, category, stack, live, code } = project
  return (
    <Layout>
      <ProjectArticle>
        <ProjectInfo>
          <div>
            <h1>{title}</h1>
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
