import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from '../pages/Home';
import About from '../pages/About';

const RoutesNew = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> }/>
            <Route exact path='/about' element={ <About />} />
        </Routes>
    </BrowserRouter>
)

export default RoutesNew;