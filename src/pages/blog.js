import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

function Blog() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog page My awesome post</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.frontmatter.title}>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
export default Blog
