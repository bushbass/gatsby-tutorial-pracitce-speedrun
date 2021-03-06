import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>
        Hello from the Index Page.My name is {data.site.siteMetadata.author}
      </h1>
    </Layout>
  )
}
