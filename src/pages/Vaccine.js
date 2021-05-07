import { Fragment, useState } from 'react'
import { InputNumber, DatePicker, message, Card } from 'antd'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import axios from 'axios';
import { Helmet } from "react-helmet";
import '../styles/Vaccine.css'

const Vaccine = () => {

    const [selectedDate, setSelectedDate] = useState(null)
    const [inputPin, setInputPin] = useState(null)
    const [fetchedData, setFetchedData] = useState(null)

    const changeSelectedDate = (date, dateString) => {
        setSelectedDate(dateString);
    }
    const changeInputPin = (pincode) => {
        setInputPin(parseInt(pincode))
    }

    const fetchPlaces = async () => {
        if (selectedDate) {
            if (inputPin >= 100000 && inputPin < 1000000 && Number.isInteger(inputPin)) {
                const request = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${inputPin}&date=${selectedDate}`)
                const data = request.data.sessions
                setFetchedData(data)
                if (data.length < 1) {
                    message.info("No places found")
                }
            }
            else {
                message.error("Enter a valid Pincode")
            }
        }
        else {
            message.error("Select a date")
        }
    }
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const renderCards = !fetchedData || fetchedData.length === 0 ? <div className="text-center w-100 pt-5"><h3 className="text-white">Nothing to show</h3></div> : fetchedData.map(item => {
        const fromTime = (item.from.split(':').join("")).substring(0, 4)
        const toTime = (item.to.split(':').join("")).substring(0, 4)
        return (
            <div className="col-12 col-md-6 p-2">
                <Card type="inner" className="vaccineCenterCard" title={item.name}>
                    <p><i className="fas fa-map-marker-alt"></i> {item.address}</p>
                    <p><i className="fas fa-syringe"></i> {item.available_capacity} available - {item.vaccine}</p>
                    <p><i className="fas fa-user-friends"></i> Min age limit: {item.min_age_limit}</p>
                    <p><i className="fas fa-clock"></i> {fromTime} hrs - {toTime} hrs</p>
                    <p><i className="fas fa-rupee-sign"></i> {item.fee_type}</p>
                </Card>
            </div>
        )
    })

    return (
        <Fragment>

            <Helmet>
                {/* General tags */}
                <title>Vaccine | HelpCorona: Help India fight coronavirus</title>
                <link rel="canonical" href="https://helpcorona.xyz/" />
                <meta name="title" content="Vaccine | HelpCorona: Help India fight coronavirus" />
                <meta name="description"
                    content="Find vaccine slots near you with the help of your Pincode As limited by the government, this portal now shows data that is 30 minutes old." />
                
                {/* Open graph tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://helpcorona.xyz/vaccine" />
                <meta property="og:title" content="Find Vaccines | HelpCorona: Help India fight coronavirus" />
                <meta property="og:description"
                    content="Find vaccine slots near you with the help of your Pincode As limited by the government, this portal now shows data that is 30 minutes old." />
                <meta property="og:image"
                    content="https://images.unsplash.com/photo-1605377347958-e8bd4c00ba1d" />
                
                {/* For Twitter */}
                <meta property="twitter:card"
                    content="https://images.unsplash.com/photo-1605377347958-e8bd4c00ba1d" />
                <meta property="twitter:url" content="https://helpcorona.xyz/vaccine" />
                <meta property="twitter:title" content="Find Vaccines | HelpCorona: Help India fight coronavirus" />
                <meta property="twitter:description"
                    content="Find vaccine slots near you with the help of your Pincode As limited by the government, this portal now shows data that is 30 minutes old." />
                <meta property="twitter:image"
                    content="https://images.unsplash.com/photo-1605377347958-e8bd4c00ba1d" />
            </Helmet>


            <NavigationBar page="vaccine" />
            <div className="vaccine-container">
                <div className="container text-center" style={{ paddingTop: "15vh" }}>
                    <div className="container-fluid">
                        <div className="container w-100 mx-auto input-form py-5">
                            <h2 className="text-white mx-auto">Vaccine Finder</h2>
                            <p className="text-white mx-auto">As per the lates government directives, this data will be 30 minutes old.</p>
                            <div className="col-12 text-left text-white">
                                <p className="mb-0 pb-1 pt-3">Select Date:</p>
                            </div>
                            <div className="col-12">
                                <DatePicker size="large" className="w-100" placeholder="Enter the date for your appointment" format={dateFormatList} onChange={changeSelectedDate} />
                            </div>
                            <div className="col-12 text-left text-white">
                                <p className="mb-0 pb-1 pt-3">Enter Pincode:</p>
                            </div>
                            <div className="col-12">
                                <InputNumber size="large" className="w-100" placeholder="Enter a valid 6-digit Pincode" onChange={changeInputPin} />
                            </div>
                            <div className="btn btn-lg btn-outline-light mx-auto mt-3" type="primary" onClick={fetchPlaces}>
                                <i className="fas fa-search mr-2"></i> Find
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row container mx-auto pt-5">

                    {renderCards}
                </div>
            </div>
            <Footer />
        </Fragment >
    )
}

export default Vaccine