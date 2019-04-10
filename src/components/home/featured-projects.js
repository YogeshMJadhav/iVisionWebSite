import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

const FeaturedProjects = () => (
    <div className="FeaturedProjects pt-5" id="FeaturedProjects" >
    <div className="container">
        <h2 className="mb-4">Featured Projects</h2>
        <div className="row">
           <Fade >
              <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                  <div className="FeaturedImg">
                      <img src="images/mobiport.png" alt="Image2" className="img-fluid"/> 
                      <div className="overlay">
                        <div className="content text"><a href="https://mobiport.io" target="_blank"><button className ="FeaturedBtn"> Visit Website</button></a> </div>
                       </div>
                    
                  </div>
               </div>
            </Fade>
           <Fade >
            <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div className="FeaturedImg">
                        <img src="images/solitaire.jpg" alt="Image1"/>              
                    <div className="overlay">
                        <div className="content text"><a href="http://www.solitaire.in" target="_blank"><button className ="FeaturedBtn">Visit Website</button></a> </div>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade >
            <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div className="FeaturedImg">
                    <img src="images/pawna.jpg" alt="Image3" className="img-fluid"/>
                    <div className="overlay">
                        <div className="content text"> <a href="https://pawnalakecamping.in" target="_blank"><button className ="FeaturedBtn">Visit Website</button></a> </div>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade >
            <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div className="FeaturedImg">
                    <img src="images/artist.jpg" alt="Image4" className="img-fluid"/>   
                    <div className="overlay">
                        <div className="content text"> <a href="http://www.touchtalent.com" target="_blank"> <button className ="FeaturedBtn">Visit Website</button></a></div>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade >
            <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div className="FeaturedImg">
                    <img src="images/domain.png" alt="Image6" className="img-fluid"/>    
                    <div className="overlay">
                        <div className="content text"> <a href="https://skybridgedomains.com" target="_blank"> <button className ="FeaturedBtn">Visit Website</button></a> </div>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade >
            <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                    <div className="FeaturedImg">
                            <img src="images/percy.png" alt="Image5" className="img-fluid"/>
                        <div className="overlay">
                            <div className="content text"> <a href="https://www.percyallan.com" target="_blank"><button className ="FeaturedBtn">Visit Website</button></a></div>
                        </div>
                    </div>
            </div>
            </Fade>           
        </div>
    </div>
</div>
   
)

export default FeaturedProjects
