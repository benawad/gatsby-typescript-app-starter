import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "src/components/Button/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button
      size="small"
      onClick={() => {
        console.log("on button click")
      }}
      label="Log out"
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
