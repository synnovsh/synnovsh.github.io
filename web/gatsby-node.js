const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  return graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allSanityProject.edges.forEach(edge => {
      const slug = edge.node.slug.current
      createPage({
        path: `/project/${slug}`,
        component: projectTemplate,
        context: {
          slug,
        },
      })
    })
  })
}
