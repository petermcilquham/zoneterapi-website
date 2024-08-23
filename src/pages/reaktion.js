// Reaktion.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/reaktion.css";

function Article(){
    return <div className="articleReaktion">
        <h1>Reaktion på behandling</h1><br/>
        <p>Hvordan og hvor meget vi reagerer på en behandling, er vidt forskelligt og ofte afhængigt af hvordan den enkelte iøvrigt har det.
Typisk vil man opleve at være træt efter en behandling. Man kan også opleve, at gamle gener kortvarigt blusser op. Ligeledes kan lettere hovedpine samt mave/tarm/blære reaktioner ofte opstå.
Kroppen skal bruge væske i forbindelse med den udrensning som behandlingen sætter igang og det er derfor vigtigt, at drikke ekstra vand i op til et døgn efter behandlingen. Af hensyn til syre/base balancen, vil det være hensigtsmæssigt at spise frugt og grønt (base) fremfor alt andet (syre). </p>
    </div>;
}

function Aside(){
    return <div className="asideReaktion greenBox">
        <p>"Når vi lærer at elske og stole på vores krop, at lytte til dens signaler, at give den sund mad, hvile og omsorg, når vi holder op med at forurene den og holder op med at forsøge at kontrollere den ved hjælp af vores ideer om, hvad  der er rigtigt, vil vi næppe være i stand til fortsat at mishandle og misbruge den."</p>
    </div>;
}

function Reaktion(){
    return <div className="grid">
        <Banner/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>;
}

export default Reaktion;