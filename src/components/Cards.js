import React from 'react';
import { Typography, Row } from 'antd'
// Destructuring elements from Typgrography component
const { Title, Paragraph } = Typography

const Cards = (props) => {
    const phoneLink = "tel:" + props.phone;
    let timestamp = props.objectID.toString().substring(0, 8)
    let date = new Date(parseInt(timestamp, 16) * 1000)
    var diff = (Date.now() - date) / 1000;
    diff /= 60;
    const setElapsedMinutes = diff>60 ? ((diff/60) > 24 ? <span>{(Math.abs(Math.round(diff/(60*24))))} day(s) ago</span> : <span>{Math.abs(Math.round(diff/60))} hour(s) ago</span>) : <span>{Math.abs(Math.round(diff))} minute(s) ago</span>;
    return (
        <div className="col-12 col-md-6 col-lg-4 p-1" key={props.identifier}>
            <div className="card bg-dark">
                <div className="card-body">
                    <Paragraph className="mb-0 text-white">Updated: {setElapsedMinutes}</Paragraph>
                    <Title className="card-title text-white mt-1 mb-0 fs-2">{props.district + ", " + props.state}</Title>
                    <Paragraph className="text-white mt-0 mb-0 fs-5">Type: {props.type.charAt(0).toUpperCase() + props.type.substring(1)}</Paragraph>
                    <Paragraph className="fw-bold text-white mt-2 mb-0 fs-5">Information:</Paragraph>
                    <Paragraph className="card-text text-white mt-0">{props.info}</Paragraph>
                    <Row className="row-fluid">
                        <a href={phoneLink} className="btn btn-warning">{props.phone}</a>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Cards