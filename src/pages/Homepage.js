import React, { Fragment, useEffect, useState } from 'react';
import backgroundVideo from '../assets/wallVideo.mp4';
import { Typography } from 'antd'
import '../styles/Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

//importing components
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Helmet } from "react-helmet";

const { Paragraph } = Typography

const Homepage = () => {
  const [totalCases, setTotalCases] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)

  useEffect(() => {
    const fetchCases = async () => {
      const getData = await axios({
        method: 'GET',
        url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
        params: { country: 'India' },
        headers: {
          'x-rapidapi-key': 'b7cd534342msh45d4a6a77809ac5p1e08f8jsnb8ca8b37e13f',
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
      })
      const totalCases = getData.data.data.confirmed;
      const totalDeaths = getData.data.data.deaths;
      setTotalCases(totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      setTotalDeaths(totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }
    fetchCases()
  }, [])

  return (
    <Fragment>

      <Helmet>
        {/* General tags */}
        <title>HelpCorona: Help India fight coronavirus</title>
        <link rel="canonical" href="https://helpcorona.xyz/" />
        <meta name="title" content="HelpCorona: Help India fight coronavirus" />
        <meta name="description"
          content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country." />
        
        {/* Open graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helpcorona.xyz/" />
        <meta property="og:title" content="HelpCorona: Help India fight coronavirus" />
        <meta property="og:description"
          content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country." />
        <meta property="og:image"
          content="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144" />
        
        {/* For Twitter */}
        <meta property="twitter:card"
          content="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144" />
        <meta property="twitter:url" content="https://helpcorona.xyz/" />
        <meta property="twitter:title" content="HelpCorona: Help India fight coronavirus" />
        <meta property="twitter:description"
          content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country." />
        <meta property="twitter:image"
          content="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144" />
      </Helmet>

      <NavigationBar page="home" />
      <video autoPlay loop muted playsInline={true} disablePictureInPicture={true} style={{ position: "fixed", right: "0", bottom: "0", minWidth: "100%", minHeight: "100%", zIndex: "-10", pointerEvents: "none" }} src={backgroundVideo} type="video/mp4" />
      <div className="homepageBannerArea d-flex flex-column justify-content-center mx-auto text-center col-11 col-md-12" style={{ width: "100vw" }}>
        <p className="text-white p-0 m-0 d-none d-md-inline" style={{ fontSize: "1.5rem" }}>This is our fight against the virus</p>
        <p className="text-white p-0 m-0 d-md-none" style={{ fontSize: "1.3rem" }}>This is our fight against the virus,</p>
        <h1 className="homepageBannerText d-none d-md-inline text-white m-0 p-0">Gear up</h1>
        <h1 className="homepageBannerText-mobile d-inline d-md-none text-white m-0 p-0">Gear up</h1>
        <div className="p-0 m-0 d-flex flex-column flex-md-row justify-content-center">
          <Link to="/resource">
            <Button className="mx-2 my-2 button-home" size="lg">Resources</Button>
          </Link>
          <Link to="/request">
            <Button className="mx-2 my-2 button-home" size="lg">Ask For Help</Button>
          </Link>
          <Link to="/vaccine">
            <Button className="mx-2 my-2 button-home" size="lg">Vaccine Finder</Button>
          </Link>
        </div>
        <div className="position-absolute d-flex flex-column justify-content-center text-white my-auto h-100" style={{ bottom: "20px" }}>
          <a href="https://twitter.com/helpcorona_xyz"><i style={{ fontSize: "1.3rem" }} class="social-icons mx-1 my-3 fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/help_corona/"><i style={{ fontSize: "1.3rem" }} class="social-icons mx-1 my-3 fab fa-instagram"></i></a>
        </div>
        <div className="position-absolute w-100 m-0" style={{ bottom: "0px" }}>
          <div className="scroll-banner mx-auto m-0 p-0">
            <p className="px-2 py-2 m-0">Scroll down to know our mission</p>
          </div>
        </div>
      </div>


      <div className="container-fluid m-0 p-0 home-feature-page w-100 bg-white" style={{ width: "100vw" }}>
        <div className="row m-0 h-100 w-100">
          <div className="col-12 col-md-6 p-5 d-flex flex-column justify-content-center">
            <div className="w-100 mx-auto py-5">
              <p className="thick-font m-0 w-75" style={{ fontSize: "3rem" }}>
                #Privacy
              </p>
              <p style={{ fontSize: "1.2rem" }}>Don't wanna share your contact details with random strangers on the internet, but still need that help? Let us help you. Handpicked, trusted people who will directly contact you once resources for you have been found, without sharing your contact details with a third party organization, because we all need privacy, no matter how adverse the situation.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 first-side"></div>
        </div>
      </div>


      <div className="container-fluid m-0 p-0 home-feature-page bg-white" style={{ width: "100vw" }}>
        <div className="row h-100">

          <div className="col-12 text-center d-flex flex-column justify-content-center" style={{ backgroundColor: "#44474C" }}>
            <p className="mx-auto w-75 blockquote py-5 text-white" style={{ fontSize: "1.7rem" }}>“Getting information from the Internet is like taking a drink from a hydrant.”</p>
          </div>


          <div className="col-12 pt-5">
            <h3 className="font-weight-normal text-center pt-5 thick-font">Coronavirus cases in India</h3>
          </div>

          <div className="col-12 col-md-6 w-100 p-0 m-0" style={{ overflowX: "hidden", width: "100vw" }}>
            <div className="d-flex flex-column justify-content-center text-center py-3 px-0 mx-0">
              <Paragraph className="mb-0 pb-0 font-weight-normal text-dark">Total cases</Paragraph>
              <p className="pb-3 display-4 p-0 m-0 w-100 font-weight-bold text-primary">{totalCases}</p>
            </div>
          </div>

          <div className="col-12 col-md-6 w-100 p-0 m-0" style={{ overflowX: "hidden", width: "100vw" }}>
            <div className="d-flex flex-column justify-content-center text-center py-3 px-0 mx-0">
              <Paragraph className="mb-0 pb-0 font-weight-normal text-dark">Total deaths</Paragraph>
              <p className="pb-3 display-4 p-0 m-0 w-100 font-weight-bold text-danger">{totalDeaths}</p>
            </div>
          </div>
          <div className="container row mx-auto py-5">
            <div className="col-12 col-md-6 tile-gallery tile-1"></div>
            <div className="col-12 col-md-6 tile-gallery tile-2"></div>
            <div className="col-12 col-md-6 tile-gallery tile-3"></div>
            <div className="col-12 col-md-6 tile-gallery tile-4"></div>
          </div>
          <div className="col-12 text-center py-5">
            <div className="py-5 w-50 mx-auto text-muted d-none d-md-flex">
              <blockquote className="blockquote" style={{ fontSize: "1.7rem" }}>"Started with privacy in mind, we are here to provide any assistance regarding covid-19"</blockquote>
            </div>
            <div className="py-5 w-75 mx-auto text-muted d-md-none">
              <blockquote className="blockquote" style={{ fontSize: "1.7rem" }}>"Started with privacy in mind, we are here to provide any assistance regarding covid-19"</blockquote>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Homepage
