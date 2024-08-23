//footer.js
import React from 'react';
import feet from 'src/images/green_feet.jpg';

export default function Footer() {
    return <div className="footer">
        <hr></hr>
        <div className="footer-flex-container">
            <div>
                <img src={feet} alt="feet image" style={{height:"200px", width:"200px"}}></img>
            </div>
            <div>
                <p>Zanna Birgit Teresa Lyck</p>
                <br></br>
                <p>Telefon/Mobil:<br/>+45 6118 3884</p>
                <br></br>
                <p>Mail:<br/>zannabirgit@hotmail.com</p>
                <br></br>
                <p>Adresse:<br/>Silkeborg Plads 8 st.tv Østerbro</p>
            </div>
        </div>
    </div>
}
