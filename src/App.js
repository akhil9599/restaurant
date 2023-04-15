import React from "react";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter,Routes,Link,Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Pagenotfound from './Pages/Pagenotfound';

const App=()=> {
    return(
        <>    
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Menu" element={<Menu />} />
    <Route path="*" element={<Pagenotfound />} />
</Routes>
</BrowserRouter>     

        </>

       
    )
}
export default App;