import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <div className="container-fluid d-flex flex-column justify-content-center py-4" style={{ backgroundColor: "rgb(50,50,50)", minHeight: "20vh" }}>
                <div className="row">
                    <div className="col-12 col-md-4 text-center text-white">
                        <h2 className="text-white m-0 p-0">HelpCorona</h2>
                        <p>Get help, privately!</p>
                    </div>
                    <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center">
                        <h5 className="fs-5 text-white">Made with <i className="fas fa-heart text-danger"></i> in India</h5>
                    </div>
                    <div className="col-12 col-md-4 text-center text-white">
                        <p className="p-0 m-0">Feedback or complains?</p>
                        <p className="p-0 m-0">Reach us at <a href="mailto:helpcorona@zohomail.in">helpcorona@zohomail.in</a></p>
                        <p className="pt-2">Read the <Link to="/legal">Legal Notice</Link></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer