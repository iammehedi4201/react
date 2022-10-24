import React from 'react';
import logo  from '../../images/Logo.svg'
import "./Header.css"


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-black">
            <div className="container-fluid ">
                <a className="navbar-brand" href="/logo">
                      
                      <img  className='img-fluid w-75' src={logo} alt="logo-image" />

                </a>
                <button className="navbar-toggler border-1 border-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Order">Order</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Order Review">Order Review</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/Manege Inventory" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Manage Inventory
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Log In" >Log In</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    
    );
};

export default Header;