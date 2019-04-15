import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

class Services extends React.Component{
    render() {
        const service = this.props.data.allContentfulAllServices.edges;
        console.log(service[0]);
return(
  <Layout>
    <SEO title="Services" />
    <div className="wrapper">
    <div className="pagebanner">
            <div className="pagebannerMax">
                <h1 className="white">Services</h1>
                {/* <!-- <h3 className="mb-4 white">The people who work at iVision Web Studio share the vision and values of our community.</h3>  --> */}
                {/* <!-- <p className="white">The easiest way to get started is to use Ghost(Pro). If you prefer to self-host, we strongly recommend an Ubuntu server with at least 1GB of memory to run Ghost.</p> --> */}
                
            </div>
        </div>

<div className="whatWeSection pt-5">
            <div className="container">
                <h2 className="mb-4">What We Do</h2>
                <div className="row">
                    { 
                      service[0].node.services.map((item) => {
                          console.log(item);
                          return(
                            <Slide bottom>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <div className="card border-0 h-100">   
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <img src={item.icon && item.icon.file.url} title="" alt="Jam Developer" height="50px"/>
                                            </div>
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="small">{item.tool}</p>
                                            <p className="card-text">{item.tagline}</p>
                                            <p className="card-text"><small className="text-muted">
                                            <Link to={`/${item.slug}`}>Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
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
  </Layout>
)
}
} 
export default Services;

export const pageQuery = graphql`
  query Services {
    allContentfulAllServices{
      edges{
        node{
          title
          slug
      services{
            title
            tool
            tagline
            slug
            icon{
              file{
                url
              }
            }
      }
        }
      }
    }
  }`