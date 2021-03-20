import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakedata from '../../fakedata.json'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import icon from '../../images/peopleicon.png';
import './DestinationConfirmation.css';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


const DestinationConfirmation = () => {
    const [selectedVehicle,setSelectedVehicle] = useState({});
    const {id,from,destination} = useParams();
    useEffect(()=>{
        setSelectedVehicle(fakedata[id])
    },[id])
    const {image,vehicle,person,cost} = selectedVehicle;

    console.log(from,destination);

    return (
        <div className="home">
            <Header></Header>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col md-12 col-lg-4 mt-5 d-flex flex-sm-row ">
                            <div className="available ">
                                <div className="timeline">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent> {from} </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineDot />
                                        <TimelineContent> {destination} </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                </div>
                                <div className="available-vehicles d-flex justify-content-between align-items-center">
                                    <img src={image} className="w-25" alt=""/>
                                    <h4> {vehicle} </h4>
                                    <img src={icon} className="w-25" alt=""/> <h4>{person} </h4>
                                    <h4> ${cost}  </h4>
                                </div>
                                <div className=" available-vehicles d-flex justify-content-between align-items-center">
                                    <img src={image} className="w-25" alt=""/>
                                    <h4> {vehicle} </h4>
                                    <img src={icon} className="w-25" alt=""/> <h4>{person} </h4>
                                    <h4> ${cost}  </h4>
                                </div>
                                <div className="available-vehicles d-flex justify-content-between align-items-center">
                                    <img src={image} className="w-25" alt=""/>
                                    <h4> {vehicle} </h4>
                                    <img src={icon} className="w-25" alt=""/> <h4>{person} </h4>
                                    <h4> ${cost}  </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3  d-flex flex-sm-row flex-lg-column map">
                            <div className=" w-100">
                                <iframe
                                    width="100%"
                                    id="map"
                                    title="map"
                                    height="600px"
                                    style={{border:"0"}}
                                    loading="lazy"
                                    allowfullscreen
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDUNxhqkILD9IOW7WszAdRpGbIRNVt-xSY
                                        &q=Space+Needle,Seattle+WA">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DestinationConfirmation;