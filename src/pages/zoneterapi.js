// Zoneterapi.js
import React from 'react';
import Banner from "src/components/banner.js";
import Footer from "src/components/footer.js";
import "src/styles/zoneterapi.css";

function Article(){
    return <div className="articleZoneterapi">
        <p>Zoneterapi er en behandlingsmetode, hvor påvirkning med tryk og massage ét sted på kroppen (primært foden), forbedrer funktionen et andet sted; muskler/organer/hormoner osv .


Zoneterapi benyttes af rigtig mange til forebyggelse og vedligeholdelse og ikke mindst til afhjælpning af aktuelle gener og bringe ro til kroppen og sindet.

 
Hvor meget behandling har jeg brug for?
Da vi er forskellige og med vidt forskellig baggrund, vil enhver behandling være individuel.


Helt generelt er det dog vigtigt for vores velbefindende, at "basis" er i orden dvs. at behandlingen først og fremmest sørger for at kredsløbet, luftvejene, fordøjelsen/mave/tarm samt homonsystemet bliver bragt til optimal funktion.


Derudover behandles på de enkelte punkter for de symptomer og ubalancer, der er aktuelle.

 
Jeg anbefaler, at få behandling med en til to ugers mellemrum de første 3-5 gange.

 
Har du ikke prøvet zoneterapi før og er du i tvivl om det kan hjælpe dig, er du velkommen til at kontakte mig for en snak. </p>
    </div>;
}

function Aside(){
    return <div className="asideZoneterapi greenBox">
        <p>Kroppen er vores indre vejleder - og med hjælp fra zoneterapien er det muligt at lære at tolke kroppens sprog. </p>
    </div>;
}

function Zoneterapi(){
    return <div className="grid">
        <Banner/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>;
}

export default Zoneterapi;