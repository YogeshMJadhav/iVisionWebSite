import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'
// import pic11 from '..//pic11.jpg'
// import { graphql } from 'gatsby';

class Success extends React.Component {
    render(){
        const success=this.props.data.contentfulContactUs;
        console.log(success);
        
        return(
            <Layout>
                <Helmet>
                    <title>Success Page</title>
                    <meta name="description" content="Success Page" />
                </Helmet>

                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                            </header>
                            <span className="image main">
                            <Img className="thank-you" alt={success.title} sizes={success.thankyou.sizes} />
                            {/* <img src={pic11} alt="" /> */}
                            </span> 
                            <p>Thank you for contacting us!</p>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}    

export default Success;

export const pageQuery = graphql`
query Success {
    contentfulContactUs{
        thankyou{
            sizes(maxWidth: 1180, background: "rgb:000000") {
              ...GatsbyContentfulSizes_withWebp
            }
            title
          }
      }  
}
`