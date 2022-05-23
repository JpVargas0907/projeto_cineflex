import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import ChoseSession from "./session/ChoseSession";
import ChoseSeat from "./seat/ChoseSeat"
import Sucess from "./success/Sucess";
import { useEffect, useState } from "react";

export default function App(){
    const [sessionList, setSessionList] = useState([]);
    const [movie, setMovie] = useState([]);
    const [filmList, setFilmList] = useState([]); 
    const [seatList, setSeatList] = useState([]);
    const [sessionInfo, setSessionInfo] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home filmList = {filmList} setFilmList = {setFilmList} /> }/>
                <Route path="/chose-session/:filmId" element={<ChoseSession sessionList = {sessionList} setSessionList = {setSessionList} movie = {movie} setMovie = {setMovie}/>}/>
                <Route path="/chose-seat/:sessionId" element={<ChoseSeat movie = {movie} seatList = {seatList} setSeatList = {setSeatList} sessionInfo = {sessionInfo} setSessionInfo = {setSessionInfo} name = {name} setName = {setName} CPF = {CPF} setCPF={setCPF} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>}/>
                <Route path="/sucess" element={<Sucess movie={movie} sessionInfo={sessionInfo} selectedSeats={selectedSeats} name={name} CPF={CPF}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

