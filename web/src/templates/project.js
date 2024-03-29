import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import BlockContent from "../components/blockContent"
import SEO from "../components/seo"

import WaveyHeading from "../components/waveyheading"

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

const maxWidth = 800

const ProjectArticle = styled.article`
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, ${maxWidth}px) minmax(
      0, auto);
  grid-template-rows: auto;
  width: 100%;
`

const ProjectInfo = styled.section`
  grid-row: 1/2;
  grid-column: 2/3;

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }
`

const BodySection = styled.section`
  grid-row: 2/3;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: minmax(0px, auto) minmax(0, ${maxWidth}px) minmax(
      0px,
      auto
    );
  width: 100%;
  padding-top: 50px;
`

const Content = styled.div`
  grid-area: 1/2;

  h1,
  h2 {
    margin: 1em 0;
  }

  p {
    margin-bottom: 1.5em;
  }

  video,
  figure {
    margin: 1.5em 0 3em 0;
  }

  .slideshow {
    margin-bottom: 3em;
    figure {
      margin: 1.5em 0 0 0 !important;
    }
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

  ul {
    list-style-type: disc;
    margin-left: 1em;
    line-height: 1.8em;
  
    @media screen and (min-width: 800px) {
        font-size: 1.2em;
    }
    
    @media screen and (min-width: 1200px) {
        font-size: 1.3em;
    }
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

    img {
      object-fit: scale-down;
    }

    figcaption {
      padding: 1em 0 0 0;
    }

    @media screen and (min-width: 800px) {
      figcaption {
        padding: 0 0 0 1em;
        flex: 1 0 10px;
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { project } = data

  const { title, _rawBody: body, category, stack, live, code } = project
  return (
    <Layout>
      <SEO title={title} />
      <ProjectArticle>
        <ProjectInfo>
          <div>
            <WaveyHeading text={title} />
          </div>
          <div>
            {category && category}
            {stack &&
              stack.map((item, index) => `${(index ? ", " : "") + item}`)}
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
