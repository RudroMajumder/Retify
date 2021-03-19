import React from 'react';
import './vehicle.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Vehicle = (props) => {
    const { image,vehicle,id} =props.vehicle;
    const handleClick = () =>{
      console.log(vehicle,'clicked')
    }
    return (
    <Link to={"/destination/"+vehicle+"/"+id} style={{textDecoration:"none"}}>
          <div onClick={handleClick}>
              <div className="container d-flex justify-content-center">
                <div className="card w-75" >
                  <img src={image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-text text-center">{vehicle}</h4>
                  </div>
                </div>
              </div>
          </div>
        </Link>
    );
};

export default Vehicle;