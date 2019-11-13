import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/about/Resume";

const SecondPage = (props) => {
  return (
    <Fragment>
      <SEO title="About Me" />
      <Resume data={props.data} />
    </Fragment>
  )
}

export default SecondPage

export const query = graphql`
  query AboutMe {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {eq: "dp.jpg"}}) {
      edges {
        node {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
