import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichImage from "../components/richImage"
import BlockContent from "../components/blockContent"

export const query = graphql`
  query IllustrationQuery {
    illustrations: allSanityIllustration(sort: { fields: creationDate }) {
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
        }
      }
    }
  }
`

const mapEdgesToNodes = data => {
    if (!data.edges) return []
    return data.edges.map(edge => edge.node)
}

const maxWidth = 1200

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
    li {
        margin: 10vh 0;
    }
  }
`

const illustrations = ({ data }) => {
    const illustrationNodes = mapEdgesToNodes(data.illustrations)
    return (
        <Layout>
            <SEO title="illustrations" />
            <h1>Editorial illustrations</h1>
            <List>
                <ul>
                    {illustrationNodes.map(illustration => (
                        <li className="illustration" key={illustration.id}>
                            <IllustrationItem illustration={illustration} />
                        </li>
                    ))}
                </ul>
            </List>
        </Layout>
    )
}

const Item = styled.article`
`

const Info = styled.div`
`

const IllustrationItem = ({ illustration }) => {
    const { mainImage } = illustration
    return (
        <Item>
            <RichImage image={mainImage} maxWidth={maxWidth} />
        </Item>
    )
}

export default illustrations
