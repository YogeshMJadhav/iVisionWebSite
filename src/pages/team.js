import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Team extends React.Component{
    render() {
        const team=this.props.data.contentfulTeam;
        return(
            <Layout>
              <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
               <Fade >
               <div className="wrapper">
                  <div className="pagebanner">
                      <div className="pagebannerMax">
                          <h1 className="white">{team.title}</h1>
                           <h3 className="mb-4 white">{team.tagline}</h3> 
                      </div>
                 </div>
                 <div className="whatWeSection pt-5">
                      <div className="container">
                          <div className="row">
                                {
                                    team.teamAvatar.map((item,index) => {
                                        return(
                                            <Slide bottom key={index}>  
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
                                                    <div className="card border-0 text-center py-3">   
                                                        <div className="card-body">
                                                            <div className="mb-3 m">
                                                            <Img className="rounded-circle" alt={item.title} sizes={item.sizes} width="120"/>
                                                                {/* <img src={item.file.url} title={item.title} alt={item.title} width="120" className="rounded-circle"/> */}
                                                            </div>
                                                            <h5 className="">{item.title}</h5>
                                                            <p className="card-text text-blue "> {item.description} </p>                               
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        )
                                    })
                                }
                          </div>
                        </div>
                  </div>   
              </div>
              </Fade>
            </Layout>
          )
    }
} 

export default Team;

export const pageQuery = graphql`
query Team {
        contentfulTeam{
         title
         slug
         tagline
         teamAvatar{
            sizes(maxWidth: 1180, background: "rgb:000000") {
                ...GatsbyContentfulSizes_withWebp
              }
           title
           description
         }
       }
}
`
