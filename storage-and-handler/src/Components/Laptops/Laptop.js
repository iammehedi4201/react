import React from 'react';
import { add, multipication } from '../Utilitis/Calculator/Oparation';
import "./Laptop.css"

const Laptop = () => {

     const laptopPrice  = 45000;
     
     const totalVat = 5000;

     const total =add(laptopPrice,totalVat)

     const result =multipication(laptopPrice,totalVat)

    return (
        <div>
            <h2>My Model is Asus Vivobook</h2>
            <p>Price:-{total} and Result:-{result}</p>
        </div>
    );
};

export default Laptop;