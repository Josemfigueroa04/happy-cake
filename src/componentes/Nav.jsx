import React from 'react';
import {Link} from 'react-router-dom';


const Nav  = () => {
    return(
        
        <nav className="navbar navbar-expand-lg bg-danger border-bottom " >
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link text-white" >Home</Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link to="/contacto" className="nav-link text-white" >Contacto</Link>
                    
                    </li>
                    <li className="nav-item dropdown">
                    
                    </li>
                    
                </ul>
                <a className="navbar-brand text-white" href="#">Happy Cake</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                </div>
            </div>
            </nav>
    )
    }

export default Nav;
