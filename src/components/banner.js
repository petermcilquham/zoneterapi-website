//banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import banner from 'src/images/banner.jpg';
import "src/styles.css";

export default function Banner() {
    return <div className="banner">
        <img src={banner} alt="banner image" style={{height:"100px", width:"70vw"}}></img>
        <ul className="greenBackground horizontalList menu">
            <li><Link to="/">Forside</Link></li>
            <li><Link to="/zoneterapi">Zoneterapi</Link></li>
            <li><Link to="/healing">Healing</Link></li>
            <li><Link to="/reaktion">Reaktion på behandling</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/erfaringer">Erfaringer</Link></li>
            <li><Link to="/priser">Priser</Link></li>
            <li><Link to="/booking">Online booking</Link></li>
        </ul>
    </div>
}