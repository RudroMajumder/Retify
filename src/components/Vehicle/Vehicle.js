import React from 'react';
import './vehicle.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Vehicle = (props) => {
    console.log(props)
    const { image,vehicle} =props.vehicle;
    return (
        <div>
            <div className="container d-flex justify-content-center">
              <div className="card w-75" >
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-text text-center">{vehicle}</h4>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Vehicle;