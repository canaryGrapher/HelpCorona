// importing dependencies
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
//importing custom CSS
import "../styles/Home.css";
import URL from "../assets/Constants";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Home = () => {
  //defining the state of the application
  const [fetchedData, setFetchedData] = useState([
    { id: 1, location: "Loading", info: "Wating for data from server..." },
  ]);
  useEffect(() => {
    //getting the state name from the URL parameterf
    document.title = `Requests | HelpCorona: Help India fight Covid-19`;
    const fetchData = async () => {
      const recievedata = await axios.get(`${URL}/api/requests/public/view`);
      setFetchedData(recievedata.data);
    };
    fetchData();
  }, []);

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const RequestCard = fetchedData.map((item) => {
    const newDate = new Date(item.timestamp);
    const idLink = `#${item.id}`;
    const titleShare = "Help this person in need!\n";
    const twtShare = `Request ${idLink}\nHelp this person in need!\n${item.info}\n  `;
    const twtshareURL = `https://www.helpcorona.xyz/thread/${item.id}`;
    const shareURL = `https://www.helpcorona.xyz/thread/${item.id}`;
    const shareQuote = `Many people throughout the country are struggling with the shortage of oxygen and other essentials required to fight for their life. A little help from you can save someone in extreme pain. \n\n Request number ${item.id}: ${item.info}\n`;
    const shareHashtags = "#helpcorona";
    const shareInfo = `${item.info}\n`;
    const shareHashtagsArray = ["covidindia", "helpcorona"];
    const similarRelated = ["@helpcorona_xyz"];
    const threadURL = `/thread/${item.id}`;
    return (
      <div className="m-3 m-md-0 p-0 p-md-2 col-12 col-md-6 mx-auto" key={item.id}>
        <div
          className="request-card w-100 px-4 p-md-5 position-relative"
        >
          <h3 className="text-light-theme pb-0 mb-0 pt-3">Request #{item.id}</h3>
          <p className="text-muted my-0 py-0">
            {month[newDate.getMonth()] +
              " " +
              newDate.getDate() +
              ", " +
              newDate.getFullYear() +
              " | " +
              formatAMPM(newDate)}
          </p>
          <div style={{ fontSize: "1.2rem" }} className="mt-3 mb-0 pb-0">
            <p className="text-primary">
              <i className="fas fa-map-marker-alt pe-1"></i> {item.location}
            </p>
            <p className="mb-0 pb-0" style={{ fontSize: "1.2rem" }}>
              {item.info}
            </p>
          </div>
          {/* Social Icons */}
          <div className="py-3">
            <p className="pt-2 pb-1 m-0">Spread the word</p>
            <FacebookShareButton
              url={shareURL}
              quote={shareQuote}
              hashtag={shareHashtags}
            >
              <i
                className="mx-2 fab fa-facebook-f"
                style={{ color: "#4267B2", fontSize: "1.3rem" }}
              ></i>
            </FacebookShareButton>
            <WhatsappShareButton
              url={shareURL}
              title={titleShare}
              separator={shareInfo}
            >
              <i
                className="mx-2 fab fa-whatsapp"
                style={{ color: "#25D366", fontSize: "1.3rem" }}
              ></i>
            </WhatsappShareButton>
            <TwitterShareButton
              url={twtshareURL}
              title={twtShare}
              related={similarRelated}
              hashtags={shareHashtagsArray}
            >
              <i
                className="mx-2 fs-5 fab fa-twitter"
                style={{ color: "#1DA1F2", fontSize: "1.3rem" }}
              ></i>
            </TwitterShareButton>
          </div>
          <div
            className="position-relative py-2 w-100 text-center card-footer"
            style={{ bottom: "0", left: "0", border: "0" }}
          >
            <Link to={threadURL}>Click here to open Thread</Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>Requests | HelpCorona: Help India fight coronavirus</title>
        <link rel="canonical" href="https://helpcorona.xyz/" />
        <meta
          name="title"
          content="Requests | HelpCorona: Help India fight coronavirus"
        />
        <meta
          name="description"
          content="Ask for help regarding resources during this pandemic, without exposing your details to a zillion people, safely and securely."
        />

        {/* Open graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helpcorona.xyz/requests" />
        <meta
          property="og:title"
          content="Requests | HelpCorona: Help India fight coronavirus"
        />
        <meta
          property="og:description"
          content="Ask for help regarding resources during this pandemic, without exposing your details to a zillion people, safely and securely."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
        />

        {/* For Twitter */}
        <meta
          property="twitter:card"
          content="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
        />
        <meta
          property="twitter:url"
          content="https://helpcorona.xyz/requests"
        />
        <meta
          property="twitter:title"
          content="Requests | HelpCorona: Help India fight coronavirus"
        />
        <meta
          property="twitter:description"
          content="Ask for help regarding resources during this pandemic, without exposing your details to a zillion people, safely and securely."
        />
        <meta
          property="twitter:image"
          content="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
        />
      </Helmet>
      <NavigationBar page="request" />

      <div
        className="container-fluid entire-card-collection pt-0 pb-5"
        style={{ paddingTop: "10vh" }}
      >
        <div className="row-fluid text-right mx-3">
          <a
            href="https://form.helpcorona.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <div className="btn btn-outline-primary ml-2" style={{marginTop: "8vh"}}>Ask for help</div>
          </a>
        </div>
        <div className="conainer-fluid">
          <Divider />
          <h1 className="text-center text-dark">Pending requests</h1>
          <Divider />
        </div>
        <div className="container row mx-auto">{RequestCard}</div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
