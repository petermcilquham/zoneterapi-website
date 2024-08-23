// Healing.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/healing.css";

function Article(){
    return <div className="articleHealing">
        <p>Healing er en af verdens ældste behandlingsformer, der kendetegnes ved, at krop og sind hjælpes tilbage til indbyrdes balance og harmoni.


Healingsenergien er en blid dybdegående energi, som løsner op for de blokeringer og spændinger, der opstår når vi gennem længere tid overbelaster kroppen ved både fysisk og psykisk at undlade at gøre det, der er det rigtige for os. </p>
    </div>;
}

function Aside(){
    return <div className="asidedeHealing greenBox">
        <p>"At lade sjælen komme til orde."</p>
    </div>;
}

function Healing(){
    return <div className="grid">
        <Banner/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>;
}

export default Healing;