import React, { useState,useContext } from 'react';
import Header from '../Header/Header';
import './Home.css'
import fakedata from '../../fakedata.json';
import { useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Vehicle from '../Vehicle/Vehicle';
import { UserContext } from '../../App';
const Home = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [vehicles,setVehicles] = useState([]);
    useEffect(()=>{
        setVehicles(fakedata);
    },[])
    console.log(fakedata[3])
    return (
        <div className="home">

            <Header></Header>
                <div className="vehicles">
                    {
                        vehicles.map( vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}> </Vehicle>)
                    }
                </div>
        </div>
    );
};

export default Home;