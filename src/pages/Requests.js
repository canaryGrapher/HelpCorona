// importing dependencies
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
//importing custom CSS
import '../styles/Requests.css'
import URL from '../assets/Constants'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Masonry } from "masonic";
import { Divider } from 'antd'
import { Helmet } from "react-helmet";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Requests = () => {
    //defining the state of the application
    const [fetchedData, setFetchedData] = useState([{ "id": 1, "location": "Loading", "info": "Wating for data from server..." }])
    useEffect(() => {
        //getting the state name from the URL parameterf
        document.title = `Requests | HelpCorona: Help India fight Covid-19`
        const fetchData = async () => {
            const recievedata = await axios.get(`${URL}/api/requests/public/view`)
            setFetchedData(recievedata.data)
        }
        fetchData()
    }, [])

    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const RequestCard = ({ data: { id, location, info, timestamp } }) => {
        const newDate = new Date(timestamp)
        const idLink = `#${id}`
        const titleShare = "Help this person in need!\n"
        const twtShare = `Help! This person needs help. @helpcorona_xyz Request ${idLink}\n\n`
        const twtshareURL = `https://www.helpcorona.xyz/thread/${id}`
        const shareURL = `https://www.helpcorona.xyz/thread/${id}`
        const shareQuote = `Many people throughout the country are struggling with the shortage of oxygen and other essentials required to fight for their life. A little help from you can save someone in extreme pain. \n\n Request number ${id}: ${info}\n`
        const shareHashtags = "#helpcorona"
        const shareInfo = `${info}\n`
        const shareHashtagsArray = ["covidindia", "helpcorona"]
        const similarRelated = ["@helpcorona_xyz"]
        const threadURL = `/thread/${id}`
        return (
            <div className="card request-card" id={idLink}>
                <div className="card-header">
                    {month[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear() + " | " + formatAMPM(newDate)}
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted"><i className="fas fa-map-marker-alt pe-1"></i> {location}</h6>
                    <h5 className="card-title text-white">Request #{id}</h5>
                    <p className="card-text text-muted">{info}</p>
                    <p className="pt-2 pb-1 m-0">Spread the word</p>
                    <FacebookShareButton url={shareURL} quote={shareQuote} hashtag={shareHashtags}><i className="mx-2 fs-5 fab fa-facebook-f" style={{ color: "#4267B2" }}></i></FacebookShareButton>
                    <WhatsappShareButton url={shareURL} title={titleShare} separator={shareInfo}><i className="mx-2 fs-5 fab fa-whatsapp" style={{ color: "#25D366" }}></i></WhatsappShareButton>
                    <TwitterShareButton url={twtshareURL} title={twtShare} related={similarRelated} hashtags={shareHashtagsArray}><i className="mx-2 fs-5 fab fa-twitter" style={{ color: "#1DA1F2" }}></i></TwitterShareButton>
                </div>
                <div className="card-footer"><Link to={threadURL}>Open this thread</Link></div>
            </div >
        )
    }

    return (
        <Fragment>

            <Helmet>
                {/* General tags */}
                <title>Requests | HelpCorona: Help India fight coronavirus</title>
                <link rel="canonical" href="https://helpcorona.xyz/" />
                <meta name="title" content="Requests | HelpCorona: Help India fight coronavirus" />
                <meta name="description"
                    content="Ask for help regarding resources during this pandemic, without exposing your details to a zillion people, safely and securely." />

                {/* Open graph tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://helpcorona.xyz/requests" />
                <meta property="og:title" content="Requests | HelpCorona: Help India fight coronavirus" />
                <meta property="og:description"
                    content="Ask for help regarding resources during this pandemic, without exposing your details to a zillion people, safely and securely." />
                <meta property="og:image"
                    content="https://images.unsplash.com/photo-1544027993-37dbfe43562a" />

                {/* For Twitter */}
                <meta property="twitter:card"
                    content="https://images.unsplash.com/photo-1544027993-37dbfe43562a" />
                <meta property="twitter:url" content="https://helpcorona.xyz/requests" />
                <meta property="twitter:title" content="Requests | HelpCorona: Help India fight coronavirus" />
                <meta property="twitter:description"
                    content="Ask for help regarding resources during this pandemic, without exposing your details to a zillion people, safely and securely." />
                <meta property="twitter:image"
                    content="https://images.unsplash.com/photo-1544027993-37dbfe43562a" />
            </Helmet>

            <NavigationBar page="request" />
            <div className="container-fluid entire-card-collection" style={{ paddingTop: "10vh" }}>
                <div className="row-fluid text-right mx-3">
                    <a href="https://form.helpcorona.xyz" target="_blank" rel="noreferrer"><div className="position- btn btn-outline-danger ml-2">Ask for help</div></a>
                </div>
                <div className="conainer-fluid">
                    <Divider />
                    <h1 className="text-center text-white">Pending requests</h1>
                    <Divider />
                </div>
                <div className="masonic container">
                    <Masonry
                        // Provides the data for our grid items
                        items={fetchedData}
                        // Adds 8px of space between the grid cells
                        columnGutter={8}
                        // Sets the minimum column width to 172px
                        columnWidth={250}
                        // Pre-renders 5 windows worth of content
                        overscanBy={5}
                        // This is the grid item component
                        render={RequestCard}
                    />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Requests;