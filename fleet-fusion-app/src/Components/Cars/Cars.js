import React from "react";
import { Row } from "react-bootstrap";
import useCars from "../../Hooks/useCars";
import CarCard from "../CarCard/CarCard";
import Carasuel from '../Carasuel/Carasuel'
import "./Cars.css";

const Cars = () => {

    const [cars,setCars]=useCars();

    console.log("cars is :-",cars);

  return (
    <div>
      <div className="text-center mt-2">
        <h1>Cars We're offering</h1>
        <h1>For Rentals</h1>
        <hr style={{ width: "50%", margin: "0px auto" }} />
      </div>
       <Carasuel></Carasuel>
      <section>
         <Row>
             {
                cars.slice(0,3).map(car=><CarCard
                 key={car.carId}
                 car={car}
                ></CarCard>)
             }
         </Row>
      </section>
       <div className=" d-flex justify-content-center my-5">
           <button className="btn btn-outline-warning w-25 ">Show More</button>
       </div>
    </div>
  );
};

export default Cars;
