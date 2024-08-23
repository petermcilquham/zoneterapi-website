// Erfaringer.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/erfaringer.css";

function Article(){
    return <div className="articleErfaringer">
        <h1>Her er et udsnit af, hvad andre har gjort sig af erfaringer, og nogle af de skønne bemærkninger jeg dagligt hører:</h1>
    </div>;
}

function Aside(){
    return <div className="asidedeErfaringer greenBox">
        <p>"Videnskabsmænd, læger og psykologer, der har undersøgt forholdet mellem stress og sygdom har konkluderet, at både evnen til at tilgive og manglen på denne evne påvirker udfaldet af alvorlig sygdom.
            Tilgivelse er ikke en handling, der fritsætter den krænkende part, det er heller ikke et signal til andre om, at det, de har gjort, er 'i orden'  og at 'alt er tilgivet nu'.
            En ægte tilgivende handling finder sted i det indre landskab, hvor det skuffede, sårede, krænkede eller vrede indre barn/ego møder sjælen."
            -Caroline Myss
        </p>
    </div>;
}

function Erfaringer(){
    return <div className="grid">
        <Banner/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>;
}

export default Erfaringer;