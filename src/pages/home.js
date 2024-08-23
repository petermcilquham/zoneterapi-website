// Home.js
import React from 'react';
import Footer from "src/components/footer.js";
import Banner from "src/components/banner.js";
import "src/styles/home.css";
  
function Header(){
    return <h1 className="headerHome">Få fodfæste med Zoneterapi</h1>
}

function Article(){
    return <div className="articleHome">
        <p>Jeg har givet zoneterapi gennem mere end 18 år, jeg har haft rigtig mange børn, unge, voksne og seniorer gennem mine hænder og jeg har slet ikke tal på, hvor mange gange jeg har hørt følgende; </p>
        <br></br>
        <p>"Ah - hvor var det dejligt - jeg ved ikke hvad det er men det gør bare noget rigtig godt for mig.
        Det var helt fantastisk. Det er noget af det bedste jeg har gjort for mig selv. Jeg er så glad for at jeg har fundet dig. Jeg bliver helt klart mindre syg nu."</p>
        <br></br>
        <p>Uanset hvad du kommer med af ubalancer, sygdom, stress, spændinger eller andre gener, så giver en behandling med zoneterapi efterfølgende ro og overblik og dermed overskud både i krop og sind. </p>
        <br></br>
        <p>Zoneterapi styrker immunforsvaret, lindrer spændinger, mindsker hovedpinen, tager toppen af gigtsmerterne,hjælper mod allergi, styrker kredsløbet, afhjælper hedeture, sætter gang i udrensningen og hjælper mave og tarme til at få det meget bedre. </p>
        <br></br>
        <p>For bestilling af tid kan du kontakte mig på mobil: 61183884, bedst med sms'er eller benytte online booking og bestille din tid direkte. </p>
    </div>
}

function Aside(){
    return <div className="asideHome">
        <h2>Zoneterapi for</h2>
        <ul>
        <li>Kredsløb</li>
        <li>mave-tarm</li>
        <li>Cancer behandling</li>
        <li>Led og muskelsmerter</li>
        <li>Allergi og astma</li>
        </ul>
    </div>
}
  
function Home(){
    return <div className="grid">
        <Banner/>
        <Header/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>
}

export default Home;