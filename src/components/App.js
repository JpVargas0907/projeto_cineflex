import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Session from "./session/ChoseSession";
import Seat from "./seat/ChoseSeat"
import Sucess from "./success/Sucess";
import { useEffect, useState } from "react";

export default function App(){
    const [filmList, setFilmList] = useState([]); 

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home filmList = {filmList} setFilmList = {setFilmList} /> }/>
                <Route path="/chose-session" element={<Session />}/>
                <Route path="/chose-seat" element={<Seat />}/>
                <Route path="/sucess" element={<Sucess />}/>
            </Routes>
        </BrowserRouter>
    );
}

