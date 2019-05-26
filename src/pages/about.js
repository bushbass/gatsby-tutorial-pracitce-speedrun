import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function About() {
  return (
    <Layout>
      <h1>About page I'm Alex Nielsen</h1>
      <p>A web developer in Northern NJ</p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default About
