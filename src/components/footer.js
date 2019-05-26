import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Footer() {
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
    <div>
      <h3>This is the footer Created by {data.site.siteMetadata.author}</h3>
    </div>
  )
}
export default Footer
