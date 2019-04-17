import React from "react"
import Img from "gatsby-image"
class  FeaturedProjects extends React.Component{
    render() {
        return (
            <div className="FeaturedProjects pt-5" id="FeaturedProjects" >
                    <div className="container">
                        <h2 className="mb-4">{this.props.tagline}</h2>
                        <div className="row">
                            {
                                this.props.portfolio.map((item,index) => {
                                    return(
                                        <div className="col-md-6 col-lg-4 col-sm-6 mb-5" key={index}>
                                            <div className="FeaturedImg">
                                               <Img className=" img-fluid"  sizes={item.projectImage && item.projectImage.sizes} />
                                                <div className="overlay">
                                                    <div className="content text"><a href={item.projectLink} target="_blank" rel="noopener noreferrer"><button className ="FeaturedBtn"> Visit Website</button></a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        )
    }
}

export default FeaturedProjects
