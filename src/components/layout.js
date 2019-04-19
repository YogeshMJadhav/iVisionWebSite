import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer";
const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
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
          }
        `}
          render={data => (
              <>
                  <div className="wrapper">
                    <Header siteTitle={data.site.siteMetadata.title} companyOverview={data.contentfulCompanyOverview} />
                      <main>{children}</main>
                    <Footer  siteTitle={data.site.siteMetadata.title} companyOverview={data.contentfulCompanyOverview}/>
                  </div>
              </>
          )}
     />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
