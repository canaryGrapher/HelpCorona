import React, { Fragment } from 'react';
//importing custom CSS
import 'antd/dist/antd.css';
import '../styles/Legal.css'
// importing components from AntD
import { Typography } from 'antd'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import { Helmet } from "react-helmet";
// Destructuring elements from Typgrography component
const { Title, Paragraph } = Typography

const Legal = () => {
    document.title = "Legal | HelpCorona: Help India fight Covid-19"
    return (
        <Fragment>

            <Helmet>
                {/* General tags */}
                <title>Legal | HelpCorona: Help India fight coronavirus</title>
                <link rel="canonical" href="https://helpcorona.xyz/legal" />
                <meta name="title" content="Legal | HelpCorona: Help India fight coronavirus" />
                <meta name="description"
                    content="Legal information regarding the platform. Please read these carefully." />

                {/* Open graph tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://helpcorona.xyz/legal" />
                <meta property="og:title" content="Legal | HelpCorona: Help India fight coronavirus" />
                <meta property="og:description"
                    content="Legal information regarding the platform. Please read these carefully." />
                <meta property="og:image"
                    content="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" />

                {/* For Twitter */}
                <meta property="twitter:card"
                    content="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" />
                <meta property="twitter:url" content="https://helpcorona.xyz/legal" />
                <meta property="twitter:title" content="Legal | HelpCorona: Help India fight coronavirus" />
                <meta property="twitter:description"
                    content="Legal information regarding the platform. Please read these carefully." />
                <meta property="twitter:image"
                    content="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" />
            </Helmet>

            <NavigationBar page="legal" />
            <div className="position-absolute go-back p-3 text-center d-flex flex-row">
                <a className="text-dark" href="/"><i className="fas fa-long-arrow-alt-left fs-3 go-back-icon p-0 m-0"></i></a>
                <p className="ps-2 fs-5 go-back-text">Go Back</p>
            </div>
            <div className="container px-5 pt-5">
                <Title className="fs-1 pt-5">Legal</Title>
                <hr className="Text-white bg-dark" />
                <Title className="fs-3">Fair Use Disclaimer</Title>
                <Paragraph>
                    The 'group' may use copyrighted material which has not always been specifically authorized by the copyright owner. The 'group' is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                    The 'group' believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
                    If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner. For all comments one makes, his/her IP address is recorded for legal purposes.
            </Paragraph>
                <Title className="fs-3">
                    No Responsibility Disclaimer
            </Title>
                <Paragraph>
                    We take extreme care of the data that goes on to the website, but, in no event shall the 'group' or its 'volunteers' be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
            </Paragraph>

                <Title className="fs-3">
                    "Use at Your Own Risk" Disclaimer
            </Title>
                <Paragraph>Although we have personally vetted the data, we do not guarantee that the information would be valid by the time you see it. Mistakes might happen from our side, and we'll make sure that the person who made that mistake be sacked, but you cannot sue us for their mistakes. This is website that is run for social cause, run mostly by students who want to bring about some changes, not professionals who are running after money.</Paragraph>
                <Title className="fs-3">Contact Us</Title>
                <Paragraph>
                    If you have any questions about this Disclaimer, You can contact us through our email <a href="mailto:helpcorona@zohomail.in">
                        helpcorona@zohomail.in
                </a>
                </Paragraph>
            </div>
            <Footer />
        </Fragment>
    );
}


export default Legal;