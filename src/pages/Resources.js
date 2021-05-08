import { Fragment, useState } from 'react'
import { Select, Typography, message } from 'antd'
import Statenames from '../contexts/Statenames'
import districts from '../contexts/Districtdata'
import NavigationBar from '../components/NavigationBar'
import URL from '../assets/Constants'
import axios from 'axios'
import Footer from '../components/Footer'
import Card from '../components/Cards'
import { Helmet } from "react-helmet";
const { Option } = Select

const Resources = () => {
    const [selectedState, setSelectedState] = useState(null)
    const [selectedDistrict, setSelectedDistrict] = useState(null)
    const [selectedResource, setSelectedResource] = useState(null)
    const [fetchedData, setFetchedData] = useState(null)

    const changeSelectedState = (value) => {
        setSelectedState(value)
        setSelectedDistrict(null)
    }
    const changeSelectedDistrict = (value) => {
        if (selectedState) {
            setSelectedDistrict(value)
        }
    }
    const changeSelectedResource = (value) => {
        setSelectedResource(value)
    }
    const requestData = async () => {
        if (selectedDistrict && selectedState && selectedResource) {
            const fetchResources = await axios.get(`${URL}/api/get/resources?state=${selectedState}&district=${selectedDistrict}`)
            if (fetchResources.data.length >= 1) {
                setFetchedData(fetchResources.data)
            } else {
                setFetchedData("No Data Available")
            }
        }
        else {
            message.error("Please select a valid state, district and resource")
        }
    }

    const StateSelect = Statenames.map(state => {
        return (
            <Option key={state.name} value={state.name}>{state.name}</Option>
        )
    })

    const DistrictSelect = !selectedState ? <Option disabled="true">Select a State first</Option> : districts.map(item => {
        let optionContainer;
        if (item.state.toLowerCase().replace(/\s/g, '') === selectedState.toLowerCase().replace(/\s/g, '')) {
            const data = item.districts.map(district => {
                return <Option key={district} value={district}>{district}</Option>
            })
            optionContainer = data;
            return optionContainer
        }
        return 0
    })

    const ShowData = !fetchedData ? null : fetchedData === "No Data Available" || fetchedData.length === 0 ? <div className="row-fluid text-center"><h1 className="text-white">No data available <br /></h1></div> : fetchedData.map(item => {
        console.log(item.type.toLowerCase(), selectedResource)
        if (selectedResource === item.type.toLowerCase()) {
            return (
                <Card key={item._id} objectID={item._id} info={item.info} phone={item.phone} district={item.district} type={item.type} state={selectedState} />
            )
        }
        else if (selectedResource === "all") {
            return (
                <Card key={item._id} objectID={item._id} info={item.info} phone={item.phone} district={item.district} type={item.type} state={selectedState} />
            )
        }
        else {
            return null
        }
    })

    return (
        <Fragment>

            <Helmet>
                {/* General tags */}
                <title>Resources | HelpCorona: Help India fight coronavirus</title>
                <link rel="canonical" href="https://helpcorona.xyz/resource" />
                <meta name="title" content="Resources | HelpCorona: Help India fight coronavirus" />
                <meta name="description"
                    content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country." />

                {/* Open graph tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://helpcorona.xyz/resource" />
                <meta property="og:title" content="Resources | HelpCorona: Help India fight coronavirus" />
                <meta property="og:description"
                    content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country." />
                <meta property="og:image"
                    content="https://images.unsplash.com/photo-1538108149393-fbbd81895907" />

                {/* For Twitter */}
                <meta property="twitter:card"
                    content="https://images.unsplash.com/photo-1538108149393-fbbd81895907" />
                <meta property="twitter:url" content="https://helpcorona.xyz/resource" />
                <meta property="twitter:title" content="Resources | HelpCorona: Help India fight coronavirus" />
                <meta property="twitter:description"
                    content="Find all Covid related support resources, personally vetted by dedicated volunteers from all around the country." />
                <meta property="twitter:image"
                    content="https://images.unsplash.com/photo-1538108149393-fbbd81895907" />
            </Helmet>

            <NavigationBar page="resource" />
            <div className="container-fluid pt-5 pb-5" style={{ backgroundColor: "#0b1022", minHeight: "100vh" }}>
                <div className="container pt-5">
                    <Typography.Title className="text-white pt-5">Find Resources</Typography.Title>
                    <div className="row pt-2">
                        <div className="col-12 col-md-4">
                            <Typography.Text className="text-white fw-bold">Select your State/UT:</Typography.Text>
                            <Select placeholder="Select state" className="bg-white my-2" style={{ width: "100%" }} onChange={changeSelectedState} showSearch>
                                {StateSelect}
                            </Select>
                        </div>
                        <div className="col-12 col-md-4">
                            <Typography.Text className="text-white fw-bold">Select your district:</Typography.Text>
                            <Select placeholder="Select district" className="bg-white my-2" style={{ width: "100%" }} default="" value={selectedDistrict} onChange={changeSelectedDistrict} showSearch>
                                {DistrictSelect}
                            </Select>
                        </div>
                        <div className="col-12 col-md-4">
                            <Typography.Text className="text-white fw-bold">Select resource:</Typography.Text>
                            <Select placeholder="Select resource" className="bg-white my-2" style={{ width: "100%" }} onChange={changeSelectedResource} showSearch>
                                <Option value="all">All Resources</Option>
                                <Option value="beds">Beds</Option>
                                <Option value="icu">ICU</Option>
                                <Option value="medicines">Medicines</Option>
                                <Option value="oxygen">Oxygen</Option>
                                <Option value="plasma">Plasma Donor</Option>
                                <Option value="ventilator">Ventilators</Option>
                                <Option value="ambulance">Ambulances</Option>
                                <Option value="others">Others</Option>
                            </Select>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={requestData}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        {ShowData ? ShowData.every(element => element === null) ? <div className="row-fluid text-center"><h5 className="text-white">No data available <br /></h5></div> : ShowData : null}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Resources