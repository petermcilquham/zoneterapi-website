import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'src/pages/home.js';
import Zoneterapi from 'src/pages/zoneterapi.js';
import Healing from 'src/pages/healing.js';
import Reaktion from 'src/pages/reaktion.js';
import Kontakt from 'src/pages/kontakt.js';
import Erfaringer from 'src/pages/erfaringer.js';  
import Priser from 'src/pages/priser.js';
import Booking from 'src/pages/booking.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/zoneterapi" element={<Zoneterapi/>} />
        <Route path="/healing" element={<Healing/>} />
        <Route path="/reaktion" element={<Reaktion/>} />
        <Route path="/kontakt" element={<Kontakt/>} />
        <Route path="/erfaringer" element={<Erfaringer/>} />
        <Route path="/priser" element={<Priser/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </Router>
  );
}
export default App;

// export default function App() {
//   return <MainContainer />;
// }



