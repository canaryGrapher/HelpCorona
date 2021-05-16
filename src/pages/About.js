import React, { Fragment, useEffect, useState } from "react";
import { Typography } from "antd";
import "../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Privacy from "../assets/privacy.png";
import Promise from "../assets/promise.png";

//importing components
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";

const { Paragraph, Title } = Typography;

const About = () => {
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
        <NavigationBar page="about" />
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
            <span className="text-thick text-light-theme pt-0 mt-0 text-focus">
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
          <img
            src={Privacy}
            alt="A girl holding a key standing next to a big phone"
            className="img-fluid image-privacy"
          />
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
                <Title level={3}>2: Data stripping</Title>
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
                  create a thread for it, which can be seen on our About. This
                  is where you can keep track of the leads by other people.
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
          <Paragraph className="pt-3 mx-auto" style={{ fontSize: "1.2rem" }}>
            Everyday, thousands of people throughout India ask for help for
            their loved ones online, but in the process, end up providing
            personal information like phone numbers. And when this personal
            information land in the hands of hackers and scammers, it is not
            good. This is where we come in. We connect you to the help
            providers, in-directly. The moment your help request has a verified
            lead, we'll personally call you, and after your request is
            fulfilled, we will close your request, deleting all your data from
            our systems.
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
              <img
                src={Promise}
                alt="Two people shaking hands with a large contract in the backgorund"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row text-center p-2 p-md-5 mx-auto my-5"
        id="volunteer"
        style={{ backgroundColor: "rgba(112,112,112,0.1)", width: "90vw" }}
      >
        <h2 className="mx-auto w-100 pt-3">Volunteer</h2>
        <div className="row w-100 mx-auto">
          <div className="col-6 text-md-right">
            <p
              className="text-light-theme mb-0 pb-0"
              style={{ fontSize: "1.4rem" }}
            >
              Total Cases
            </p>
            <Paragraph className="pt-0 mt-0 case-counter">
              {totalCases}
            </Paragraph>
          </div>
          <div className="col-6 text-md-left">
            <p
              className="text-light-theme mb-0 pb-0"
              style={{ fontSize: "1.4rem" }}
            >
              Total Deaths
            </p>
            <Paragraph className="pt-0 mt-0 case-counter">
              {totalDeaths}
            </Paragraph>
          </div>
        </div>
        <div className="container">
          <Paragraph style={{ fontSize: "1.2rem" }}>
            It hurts to see so many people suffering and, while being completely
            able, not being able to help. Volunteer some of your time and sleep
            peacefully at night, knowing you helped someone in need. All you
            need to do is pick a request and find resources that might help the
            person, be it medicines, hospital beds, oxygen cylinders or
            concentrators, food service, or plasma donors. We are also looking
            for a technical team (MERN Stack) to manage the website and add new
            features and security updates. If there are ways you can help us in
            other ways, you are more than welcome.
          </Paragraph>
          <a
            href="https://forms.office.com/r/SHLQNh6HPg"
            target="_blank"
            rel="noreferrer"
          >
            <div className="btn btn-lg btn-dark mb-4">Volunteer</div>
          </a>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default About;
