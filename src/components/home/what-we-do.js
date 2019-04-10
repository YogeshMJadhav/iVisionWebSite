import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';

const WhatWeDo = () => (
    <div className="whatWeSection pt-5">
    <div className="container">
        <h2 className="mb-4">What We Do</h2>
        <div className="row">
        <Slide bottom>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card border-0 h-100">   
                    <div className="card-body">
                        <div className="mb-3">
                            <img src="images/jam_developer.png" title="Jam Developer" alt="Jam Developer" height="50px"/>
                        </div>
                        <h5 className="card-title">JAM Development</h5>
                        <p className="small">Gatsby /Hugo/Jekyll / Contentful / Netlify</p>
                        <p className="card-text">Modern Web Development Architecture.</p>
                        <p className="card-text"><small className="text-muted">
                         <Link to="/service-jam">Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card border-0 h-100">   
                    <div className="card-body">
                        <div className="mb-3">
                            <img src="images/web_aap_devlopement.png" title="Web App Development" alt="Web App Development" height="50px"/>
                        </div>
                        <h5 className="card-title">Web App Development</h5>
                        <p className="small">ReactJS + Redux/ AngularJS /  NodeJS / Laravel</p>
                        <p className="card-text">Creating Online Environments.</p>
                        <p className="card-text"><small className="text-muted">
                        <Link to="/service-webapp">Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card border-0 h-100">   
                    <div className="card-body">
                        <div className="mb-3">
                            <img src="images/mobile_app_dev.png" title="Mobile App Development" alt="Mobile App Development" height="50px"/>
                        </div>
                        <h5 className="card-title">Mobile App Development </h5>
                        <p className="small">iOS / Android /React Native /Ionic</p>
                        <p className="card-text">We Turn Ideas Into Wonderful Apps.</p>
                        <p className="card-text"><small className="text-muted"> 
                        <Link to="/service-mobileapp">Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card border-0 h-100">   
                    <div className="card-body">
                        <div className="mb-3">
                            <img src="images/web_devlopement.png" title="Website Development" alt="Website Development" height="50px"/>
                        </div>
                        <h5 className="card-title">Website Development </h5>
                        <p className="small">CMS / E-Commerce / Responsive Framework</p>
                        <p className="card-text">Building Smarter Websites.</p>
                        <p className="card-text"><small className="text-muted">
                        <Link to="/service-website">Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card border-0 h-100">   
                    <div className="card-body">
                        <div className="mb-3">
                            <img src="images/ux_and_ui.png" title="UI/UX Design" alt="UI/UX Design" height="50px"/>
                        </div>
                        <h5 className="card-title">UI/UX Design</h5>
                        <p className="small">Photoshop / Illustrator / Wireframing </p>
                        <p className="card-text">UI/UX Both Work Closely Together. </p>
                        <p className="card-text"><small className="text-muted"> 
                        <Link to="/service-design">Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card border-0 h-100">   
                    <div className="card-body">
                        <div className="mb-3">
                            <img src="images/redesign.png" title="Redesign Maintenance" alt="Redesign Maintenance" height="50px"/>
                        </div>
                        <h5 className="card-title">Redesign Maintenance</h5>
                        <p className="card-text">Our website maintenance services are tailor made to meet your needs.</p>
                        <p className="card-text"><small className="text-muted">
                        <Link to="/service-maintenance">Read more <i className="fas fa-chevron-right ml-1" ></i></Link></small></p>
                    </div>
                </div>
            </div>
            </Slide>
        </div>
    </div>

   <div className="text-center">
        <Link to='/services/'> <button className="btn mb-5">View all</button> </Link>
   </div> 
</div>
   
)

export default WhatWeDo;
