import React, { Fragment, useEffect, useState } from "react";
import { Typography } from "antd";
import "../styles/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Privacy from "../assets/privacy.png";
import Promise from "../assets/promise.png";
import { Link } from "react-router-dom";

//importing components
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";

const { Paragraph, Title } = Typography;

const Homepage = () => {
  const [totalCases, setTotalCases] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

  useEffect(() => {
    const fetchCases = async () => {
      const getData = await axios({
        method: "GET",
        url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
        params: { country: "India" },
        headers: {
          "x-rapidapi-key":
            "b7cd534342msh45d4a6a77809ac5p1e08f8jsnb8ca8b37e13f",
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      });
      const totalCases = getData.data.data.confirmed;
      const totalDeaths = getData.data.data.deaths;
      setTotalCases(
        totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setTotalDeaths(
        totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    };
    fetchCases();
  }, []);

  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>HelpCorona: Help India fight coronavirus</title>
        <link rel="canonical" href="https://helpcorona.xyz/" />
        <meta name="title" content="HelpCorona: Help India fight coronavirus" />
        <meta
          name="description"
          content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country."
        />

        {/* Open graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helpcorona.xyz/" />
        <meta
          property="og:title"
          content="HelpCorona: Help India fight coronavirus"
        />
        <meta
          property="og:description"
          content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
        />

        {/* For Twitter */}
        <meta
          property="twitter:card"
          content="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
        />
        <meta property="twitter:url" content="https://helpcorona.xyz/" />
        <meta
          property="twitter:title"
          content="HelpCorona: Help India fight coronavirus"
        />
        <meta
          property="twitter:description"
          content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country."
        />
        <meta
          property="twitter:image"
          content="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
        />
      </Helmet>

      <div className="container-fluid m-0 p-0">
        <NavigationBar page="home" />
        <div className="firstSection d-flex flex-column justify-content-center">
          <div
            className="bg-dark mx-auto home-banner"
            style={{ height: "85vh", width: "90vw" }}
          ></div>
          <div className="position-absolute text-center w-100 pt-5 mt-5">
            <Paragraph
              className="text-white pb-0 mb-0 font-weight-bold"
              style={{ fontSize: "1.5rem" }}
            >
              We are here to help,
            </Paragraph>
            <span
              className="text-thick text-light-theme pt-0 mt-0 text-focus"
            >
              PRIVATELY.
            </span>
            <Paragraph
              className="text-white pb-0 mb-0 font-weight-bold"
              style={{ fontSize: "1.5rem" }}
            >
              You don't need to share your phone number to get help.
            </Paragraph>
          </div>
        </div>
        <div
          className="row text-center p-2 p-md-5 mx-auto mt-5"
          style={{ backgroundColor: "rgba(112,112,112,0.1)", width: "90vw" }}
        >
          <h2 className="mx-auto w-100 pt-3">
            We eliminate the need to share your contact details
          </h2>
          <Paragraph
            className="pt-3 w-75 mx-auto"
            style={{ fontSize: "1.2rem" }}
          >
            HelpCorona acts as an intermediator between you and hundreds of
            people willing to help without disclosing your contact details. Your
            details stay with the trusted handful people of the organization, so
            that they can inform you about verified leads.
          </Paragraph>
        </div>
        <div className="text-center mt-3 mb-5">
          <img src={Privacy} alt="privacy image" className="img-fluid image-privacy" />
        </div>
        <div className="container-fluid p-md-5 mx-auto mt-5">
          <h2 className="mx-auto text-center">How it works?</h2>
          <div className="row how-it-works-section mx-auto">
            <div className="col-12 col-md-6">
              <div className="mx-auto work-card m-3 p-3">
                <Title level={3}>1: Form filling</Title>
                <Paragraph>
                  When you fill the form for a request, it is sent to our
                  backend and we store it securely on our database.
                </Paragraph>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mx-auto work-card m-3 p-3">
                <Title level={3}>2: Data removal</Title>
                <Paragraph>
                  All your personal information like name, phone number and
                  email address is encrypted, and never sent to the frontend.
                  Only a select few, trusted people can view those details for
                  contacting you.
                </Paragraph>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mx-auto work-card m-3 p-3">
                <Title level={3}>3: Thread creation</Title>
                <Paragraph>
                  After your request has been processed by our backend, we
                  create a thread for it, which can be seen on our homepage.
                  This is where you can keep track of the leads by other people.
                </Paragraph>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mx-auto work-card m-3 p-3">
                <Title level={3}>4: Lead confirmation</Title>
                <Paragraph>
                  Once we get a lead that 100% accurate and helpful, we make the
                  call to inform you about that lead, and finally close your
                  request once you have been helped.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row text-center p-5 mx-auto my-5"
          style={{ backgroundColor: "rgba(112,112,112,0.1)", width: "90vw" }}
        >
          <h2 className="mx-auto w-100">Why us?</h2>
          <Paragraph
            className="pt-3 mx-auto"
            style={{ fontSize: "1.2rem" }}
          >
            Everyday, thousands of people throughout India ask for help for
            their loved ones online, but in the process, end up providing
            personal information like phone numbers. And when this personal
            information land in the hands of hackers and scammers, it is not
            good. This is where we come in. We connect you to the help providers, in-directly. The moment your help request has a verified lead, we'll personally call you, and after your request is fulfilled, we will close your request, deleting all your data from our systems.
          </Paragraph>
        </div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center px-4">
              <Title level={2}>
                The <span className="text-light-theme">Privacy</span> promise
              </Title>
              <Paragraph style={{ fontSize: "1.2rem" }}>
                Your data is securely stored on our databases and we do not
                intend to make any money out of it. This entire website runs
                through the money invested by the creators purely out of
                goodwill. There are no ads, or any scientific research projects
                to study behavior. It is created with only one thing in mind, to
                help the people of this country during these tough times.
              </Paragraph>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <img src={Promise} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Homepage;
