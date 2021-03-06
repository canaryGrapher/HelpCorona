import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Comments from "../components/Comments";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
//importing components from and design
import { Input, Button, message, Checkbox } from "antd";
import { Helmet } from "react-helmet";
import URL from "../assets/Constants";
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

const Thread = () => {
  let captcha;
  const [recapthaValue, setRecapthaValue] = useState("Empty");
  const params = useParams();
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
  const onChange = (value) => {
    setRecapthaValue(value);
  };
  const setCaptchaRef = (ref) => {
    if (ref) {
      return (captcha = ref);
    }
  };

  const resetCaptcha = () => {
    // maybe set it till after is submitted
    captcha.reset();
  };
  const [fetchedDetails, setFetchedDetails] = useState({
    entrynumber: 1,
    info: "Waiting",
    closed: false,
    commentcount: 2,
    comments: [
      {
        commentid: "comment_2_608bef34170d5d6aa31ec02a",
        date: "2021-04-30T13:22:20.880Z",
        comment: "This is a sample comment",
        likes: 0,
        dislikes: 0,
      },
    ],
    timestamp: "2021-05-01T11:04:30.116+00:00",
  });
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [alreadyDisliked, setAlreadyDisliked] = useState(false);
  const [confirmPromise, setConfirmPromise] = useState(false);
  const [refreshState, setRefreshState] = useState({ change: false });
  const [commentBody, setCommentBody] = useState();

  useEffect(() => {
    console.log("Running fetch");
    document.title = `Thread | HelpCorona`;
    const getThreads = async () => {
      const fetchedRequestData = await axios.get(
        `${URL}/api/requests/public/thread/${params.id}`
      );
      setFetchedDetails(fetchedRequestData.data);
    };
    setAlreadyLiked(false);
    setAlreadyDisliked(false);
    getThreads();
    // eslint-disable-next-line
  }, [refreshState]);

  const sendLike = async (commentIdentifier) => {
    const updateLike = await axios.put(
      `${URL}/api/requests/public/thread/like/${params.id}/${commentIdentifier}`
    );
    if (updateLike.res === "Updated") {
      setAlreadyLiked(true);
    }
  };
  const sendDislike = async (commentIdentifier) => {
    const updateDislike = await axios.put(
      `${URL}/api/requests/public/thread/dislike/${params.id}/${commentIdentifier}`
    );
    if (updateDislike.res === "Updated") {
      setAlreadyDisliked(true);
    }
  };

  const changeConfirmPromise = () => {
    const newStatePromise = !confirmPromise;
    setConfirmPromise(newStatePromise);
  };

  const updateCommentBodyState = (typing) => {
    setCommentBody(typing.target.value);
  };

  const submitLead = async () => {
    if (commentBody != null) {
      if (confirmPromise) {
        if (recapthaValue !== "Empty") {
          resetCaptcha();
          alert(recapthaValue)
          const sendLead = await axios.post(
            `${URL}/api/requests/public/thread/comment/${params.id}`,
            { comment: commentBody, code: recapthaValue }
          );
          if (sendLead.data === "Post Added") {
            setRefreshState({ change: true });
            changeConfirmPromise();
            message.success("The comment was added");
          } else {
            message.error("There was an error, try again");
          }
        } else{
          message.error("Complete the Recaptcha!")
        }
      } else {
        message.error("Accept the declaration by clicking the checkbox!");
      }
    } else {
      message.error("Please type some text");
    }
  };
  const emptyComments = (
    <div
      className="d-flex flex-column justify-content-center w-100 text-center"
      style={{ height: "15vh" }}
    >
      <p className="text-light-theme fs-5 m-0 p-0">No leads yet</p>
    </div>
  );
  const commentList =
    fetchedDetails.comments.length === 0
      ? emptyComments
      : fetchedDetails.comments.map((item) => {
          return (
            <Comments
              key={item.commentid}
              identifier={item.commentid}
              time={item.date}
              likes={item.likes}
              dislikes={item.dislikes}
              content={item.comment}
              likeFunction={sendLike}
              dislikeFunction={sendDislike}
              alreadyLiked={alreadyLiked}
              alreadyDisliked={alreadyDisliked}
            />
          );
        });
  const ReplyBox = fetchedDetails.closed ? null : (
    <div className="text-center my-3">
      <div className="row text-left">
        <p className="m-0 pb-1 pl-3" style={{ fontSize: "1.3rem" }}>
          Do you have information that can help this person?
        </p>
        <div className="col-12">
          <Input.TextArea
            id={"textarea" + params.id}
            rows={5}
            placeholder="Enter your lead here"
            onChange={updateCommentBodyState}
          />
        </div>
      </div>
      <Checkbox
        className="text-dark mt-3 mb-2 text-left"
        checked={confirmPromise}
        onChange={changeConfirmPromise}
      >
        I declare that the lead I am providing is legitimate and is not meant to
        hurt anyone.
      </Checkbox>
      <br />
      <div className="w-100 d-flex flex-row justify-content-center mt-2">
        <ReCAPTCHA
          ref={(r) => setCaptchaRef(r)}
          onChange={onChange}
          sitekey="6LdRYNcaAAAAAGCu6qTkEiCF5dP_pw6rNbiitKkI"
        />
      </div>
      <br />
      <Button type="primary" onClick={submitLead}>
        Submit Lead
      </Button>
    </div>
  );
  const titleIndicator = fetchedDetails.closed ? (
    <h5 className="text-muted">
      <i className="far fa-check-square text-success"></i> Resolved
    </h5>
  ) : (
    <h5 className="text-muted">
      <i className="fas fa-times text-danger"></i> Not resolved
    </h5>
  );
  const newDate = new Date(fetchedDetails.timestamp);

  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>
          {"Request #" + fetchedDetails.id} | HelpCorona: Help India fight
          coronavirus
        </title>
        <link rel="canonical" href="https://helpcorona.xyz/" />
        <meta name="title" content="HelpCorona: Help India fight coronavirus" />
        <meta name="description" content={fetchedDetails.info} />

        {/* Open graph tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://helpcorona.xyz/thread/" + fetchedDetails.id}
        />
        <meta
          property="og:title"
          content={
            "Request #" +
            fetchedDetails.id +
            " | HelpCorona: Help India fight coronavirus"
          }
        />
        <meta property="og:description" content={fetchedDetails.info} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1577563908411-5077b6dc7624"
        />

        {/* For Twitter */}
        <meta
          property="twitter:card"
          content="https://images.unsplash.com/photo-1577563908411-5077b6dc7624"
        />
        <meta
          property="twitter:url"
          content={"https://helpcorona.xyz/thread/" + fetchedDetails.id}
        />
        <meta
          property="twitter:title"
          content={
            "Request #" +
            fetchedDetails.id +
            " | HelpCorona: Help India fight coronavirus"
          }
        />
        <meta property="twitter:description" content={fetchedDetails.info} />
        <meta
          property="twitter:image"
          content="https://images.unsplash.com/photo-1577563908411-5077b6dc7624"
        />
      </Helmet>

      <NavigationBar />
      <div className="container-fluid pb-5">
        <div className="position-relative go-back p-3 pb-5 text-center d-flex flex-row">
          {/* <Link to="/">
            <i className="fas fa-long-arrow-alt-left text-dark fs-3 go-back-icon p-0 m-0"></i>
          </Link> */}
        </div>
        <div className="container text-dark">
          <div
            className="d-flex flex-row pb-4"
            style={{ lineHeight: "2.4rem" }}
          >
            <h1 className="text-light-theme m-0" style={{ fontSize: "2.4rem" }}>
              Request #{params.id}
            </h1>{" "}
            <Link to="/">
              <button
                className=" ml-3 btn btn-danger"
                style={{ height: "40px" }}
              >
                Exit thead
              </button>
            </Link>
          </div>
          <div className="card">
            <div className="card-header d-flex flex-column justify-content-center">
              {titleIndicator}
            </div>
            <div className="card-body">
              <p className="card-text">
                <i className="fas fa-map-marker-alt pe-1"></i>{" "}
                {fetchedDetails.location}
              </p>
              <p className="text-dark" style={{ fontSize: "1.1rem" }}>
                {fetchedDetails.info}
              </p>
            </div>
            <div className="card-footer">
              {month[newDate.getMonth()] +
                " " +
                newDate.getDate() +
                ", " +
                newDate.getFullYear() +
                " | " +
                formatAMPM(newDate)}
            </div>
          </div>
          {ReplyBox}
          {commentList}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Thread;
