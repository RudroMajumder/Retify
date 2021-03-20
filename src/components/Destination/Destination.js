import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import image from '../../images/Map.png'
import './Destination.css'
import {  useParams } from 'react-router';
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
import fakeVehicle from '../../fakeVehicle.json';

const Destination = () => {
        const {id,vehicle} = useParams();
        const [from,setFrom] = useState("");
        const [destination,setDestination] = useState("");
let history = useHistory();

    const handleBlur = (e) =>{
        if(e.target.name === "from" ){
            const from = e.target.value;
            console.log(from);
            setFrom(from);
        }
        if(e.target.name === "destination" ){
            const destination = e.target.value ;
            console.log(destination);
             setDestination(destination);
        }
    }
    console.log(from,destination)
    const handleSubmit = e =>{
        e.preventDefault();
        history.replace(`/confirmation/${vehicle}/${id}/${from}/${destination}`);
    }
    return (
        <div className="home">
            <Header></Header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col md-12 col-lg-4 mt-5 d-flex flex-sm-row ">
                            <div className="pick ">
                                <form onSubmit={handleSubmit}>
                                    <p style={{textAlign:"left"}}> Pick From </p>
                                    <input type="text" name="from" placeholder="Your Location" onBlur={handleBlur} required/>

                                    <p style={{textAlign:"left"}}> Pick To </p>
                                    <input type="text" name="destination" placeholder="Your Destination" onBlur={handleBlur} required/>
                                <br/>
                                <button type="submit">Search</button>
                                {/* <Link to={"/confirmation/"+vehicle+"/"+id+"/"+from+"/"+destination}> <button type="submit">Search</button> </Link> */}
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3  d-flex flex-sm-row flex-lg-column map">
                            <div className=" w-100">
                                    <iframe
                                        width="100%"
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

export default Destination;