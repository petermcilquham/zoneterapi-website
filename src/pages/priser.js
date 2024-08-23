// Priser.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/priser.css";

function Header(){
    return <h1 className="headerPriser">Priser pr. 12/03/2023</h1>
}

function Article(){
    return <div className="articlePriser">
        <ul>
            <li>Zoneterapi 50 minutter 610 kr</li>
            <li>Zoneterapi i kombination med anden behandling eller samtale 60 minutter 680 kr. </li>
            <li>Zoneterapi i kombination med anden behandling eller samtale ca. 1 time og 15 minuter 780 kr</li>
        </ul>
        <br></br>
        <p>Husk altid at afsætte lidt længere tid end selve behandlingen. Ofte er der brug for at udveksle informationer og måske også for en samtale med råd og vejledning. </p>
        <br></br>
        <p>Har du spørgsmål, er du atid velkommen til at kontakte mig på mail: zannabirgit@hotmail.com eller gerne en sms på mobil nr 6118 3884.</p>
        <br></br>
        <p>Bemærk: Afbud skal ske 24 timer inden aftalt tid, ved for sent afbud må du forvente at betale gebyr på 375 kr. Ved udeblivelse må du forvente at betale fuld pris.</p>
        <br></br>
        <p>Betaling er kontant eller med MobilePay/Myshop i forbindelse med behandlingen eller via bankoverførsel seneste dagen før på konto: 2313 6880 286 240. </p>
        <br></br>
        <p>Ved køb af tilbud, betales samtidig med bestilling af tilbuddet. </p>
        <br></br>
        <p>Jeg er registreret behandler (RAB) og det giver dig mulighed for at få helt eller delvis dækning via sygeforsikringer samt tilskud fra Sygesikringen Danmark. Vær dog opmærksom på at når der ydes tilskud er det kun muligt at købe behandlinger til fuld pris. </p>
    </div>
}

function Priser(){
    return <div className="grid">
        <Banner/>
        <Header/>
        <Article/>
        <Footer/>
    </div>;
}

export default Priser;