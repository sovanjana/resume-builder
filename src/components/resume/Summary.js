import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap";
import Img from 'gatsby-image';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

export default function Summary(_props) {
  const data = useStaticQuery(imgQuery);
  const imgSrc = data.allFile.edges[0].node.childImageSharp.fluid;
  return (
    <Row>
      <Col xs={3} className="p-4">
        <Img fluid={imgSrc} alt="profile-img" className="profile-image" />
      </Col>
      <Col xs={9} className="pb-2 pt-2 pr-2 pl-0">
        <div className="summery">
          <h3>Sovan Jana</h3>
          <h4>Frontend Developer</h4>
          <p>
            Frontend Developer with a demonstrated history of working in the
            development industry. 3+ yrs. of experience in working with JavaScript,
            TypeScript, ReactJS, NodeJS and GraphQL. People know me as a
            simple and polite person and someone who can come up with new
            ideas and solutions. I embrace the opportunity to learn new things
            and believe in working smartly, efficiently and be productive.
          </p>
        </div>
      </Col>
    </Row>
  );
}

const imgQuery = graphql`
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