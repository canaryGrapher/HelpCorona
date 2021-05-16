import React, { Fragment } from "react";
//importing custom CSS
import "antd/dist/antd.css";
import "../styles/Legal.css";
// importing components from AntD
import { Typography } from "antd";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { Helmet } from "react-helmet";
// Destructuring elements from Typgrography component
const { Title } = Typography;

const Legal = () => {
  document.title = "Legal | HelpCorona: Help India fight Covid-19";
  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>Legal | HelpCorona: Help India fight coronavirus</title>
        <link rel="canonical" href="https://helpcorona.xyz/legal" />
        <meta
          name="title"
          content="Legal | HelpCorona: Help India fight coronavirus"
        />
        <meta
          name="description"
          content="Legal information regarding the platform. Please read these carefully."
        />

        {/* Open graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helpcorona.xyz/legal" />
        <meta
          property="og:title"
          content="Legal | HelpCorona: Help India fight coronavirus"
        />
        <meta
          property="og:description"
          content="Legal information regarding the platform. Please read these carefully."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        />

        {/* For Twitter */}
        <meta
          property="twitter:card"
          content="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        />
        <meta property="twitter:url" content="https://helpcorona.xyz/legal" />
        <meta
          property="twitter:title"
          content="Legal | HelpCorona: Help India fight coronavirus"
        />
        <meta
          property="twitter:description"
          content="Legal information regarding the platform. Please read these carefully."
        />
        <meta
          property="twitter:image"
          content="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        />
      </Helmet>

      <NavigationBar page="legal" />
      <div className="container px-5 pt-5 legal-notice">
        <Title className="fs-1 pt-5">Disclaimer</Title>
        <hr className="Text-white bg-dark" />
        <Title className="fs-3"></Title>
        <p>
          In no event, HelpCorona or its volunteers, partners, or associates
          will be liable to You for any special, indirect, sincidental,
          consequential, punitive, reliance, or exemplary damages howsoever
          arising. The data on this website is crowdsourced and we make no
          representation or warranty with respect to the accuracy or relaibility
          of any information. If any part of Information becomes invalid /
          inaccurate for any reason, it shall not be construed as
          ‘misinformation’ by any user.
        </p>
        <Title className="fs-3">Privacy Policy</Title>
        <p>
          When you post a request or a comment, your personal data is collected
          and is visible to only the trusted members of this association. We
          take extreme care of your personal data, and protect it with utmost
          care. We also collect data about the type of device you use, the
          browser, and your physical location along with your IP address when
          you post something on our website for legal purposes. Your data is not
          used for monetary benefits, either by us, or any third-party agency.
          We will not provide any of this data to anyone apart from governmental
          legal agencies, if and when asked. We use analytics system to track
          the domographics of our users, so that we can provide better services,
          and analyze how our users use the website.
        </p>

        <Title className="fs-3">Notice</Title>
        <p>
          We do not claim authorship or any ownership rights in the Information.
          The information is liable to be changed and we are not liable if any
          information becomes redundant, invalid or unusable for any reason. The
          information is provided free of cost, without any consideration, for
          social purposes and the user shall not be a ‘consumer’ for the
          purposes of the Consumer Protection Act, 2019 and waives any claims
          for deficiency of service whatsoever. All Information has been
          procured from the public domain and does not involve sensitive
          personal information as defined under IT ACT, 2002 and rules made
          thereunder.
        </p>
        <Title className="fs-3">Contact Us</Title>
        <p>
          If you have any questions about this Disclaimer, or for content deletion, updation, or anything else, you can contact us
          through our email{" "}
          <a href="mailto:helpcorona@zohomail.in">helpcorona@zohomail.in</a>
        </p>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Legal;
