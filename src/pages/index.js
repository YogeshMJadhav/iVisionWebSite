import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SlickSlider from '../components/home/slick-slider';
import WhatWeDo from '../components/home/what-we-do';
import FeaturedProjects from '../components/home/featured-projects';
import WhatOurCustomerSay from "../components/home/what-our-customer-say";
import Fade from 'react-reveal/Fade';

class IndexPage extends React.Component{
  render() {
    const service = this.props.data.allContentfulAllServices.edges;
    const portfolio = this.props.data.allContentfulPortfolio.edges;
    console.log(service);
    
 return (
  <div>
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Fade>
    <div className="slick-wrapper">
    <SlickSlider service={service[0].node.services}/>
    </div>
    <WhatWeDo service={service[0].node.services}/>
    <FeaturedProjects portfolio={portfolio} />
    <WhatOurCustomerSay/>
    </Fade>
  </Layout>
  </div>
)
}
}

export default IndexPage;

export const pageQuery = graphql`
  query Service {
    allContentfulAllServices{
      edges{
        node{
          services{
            icon{
              fixed(width: 50 ,height:50) {
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
              description
              title
            }
            title
            tool
            tagline
            slug
            slideTitle
            shortBio{
              childMarkdownRemark{
                excerpt
              }
            }
          }
        }
      }
    }
    allContentfulPortfolio{
      edges{
        node{
          title
          slug
          projectLink
          projectImage{
            sizes(maxWidth: 1180, background: "rgb:000000") {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
        contentfulCompanyOverview{
        slug
        phone1
        phone2
        mailId1
        facebook
        instagram
        linkedin
        ivisionLogo{
          fixed(width: 200 ,height:50) {
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
      }
  }`