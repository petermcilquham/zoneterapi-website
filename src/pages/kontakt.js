// Kontakt.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/kontakt.css";

function Article(){
    return <div className="articleKontakt">
        <p>Ønsker du nyhedsbrev og tilbud, så skriv til mig med din mail adresse.

Har du spørgsmål, er du er altid velkommen til at kontakte mig.</p>
    </div>;
}

function Aside(){
    return <div className="asidedeKontakt">
        <p>image goes here</p>
    </div>;
}

function Kontakt(){
    return <div className="grid">
        <Banner/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>;
}

export default Kontakt;