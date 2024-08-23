// Booking.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/booking.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

function Map(){
    return (
        <MapContainer center={[55.705053, 12.585333]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[55.705053, 12.585333]}>
          </Marker>
        </MapContainer>
      );
}

function Article(){
    return <div className="articleBooking"> 
    <p>test</p>
    </div>
}

function Aside(){
    return <div className="asideBooking">  
    <Map/>
    </div>
}

function Booking(){
    return <div className="grid">
        <Banner/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>;
}

export default Booking;