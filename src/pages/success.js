import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class Success extends React.Component {
    render(){
        return(
            <Layout>
                <Helmet>
                    <title>Success Page</title>
                    <meta name="description" content="Success Page" />
                </Helmet>
                <div>
                    <div className="pagebanner">
                        <div className="pagebannerMax">
                            <div className="success">
                                <i class="fas fa-check-circle"></i>
                            </div>
                                <h1 className="white">Successfully Submited</h1>
                        </div>
                    </div>
                    <div className="bg-white shadow-1 brb4 p-5 message ">
                        <h4> Your message has been successfully sent.</h4>
                        <h4> We will contact you very soon.</h4>
                    </div>
                </div>
            </Layout>
        )
    }
}    

export default Success;
