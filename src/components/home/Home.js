import React from "react";
import axios from 'axios';
import Header from "../header/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home(props) {

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            props.setFilmList([...response.data]);
        });

    }, []);

    return (
        <>
            <Header />
            <Content>
                <p>Selecione o filme</p>
                <FilmContent>
                    {props.filmList.map((film, index) => 
                        <Film key = {index} img = {film.posterURL}/>    
                    )}
                </FilmContent>
             </Content>
        </>
    );
}

const Content = styled.div`
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100vw;
    justify-content: center;
    text-align: center;

    p {
        font-weight: 400;
        font-size: 24px;    
        width: 100vw;
        margin: 50px 0px 50px 0px;
    }
`


const FilmContent = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

function Film(props) {
    return (
        <Filmstyle>
            <img src={props.img} alt=""/>
        </Filmstyle>     
    );
}

const Filmstyle = styled.div`
        width: 145px;
        height: 210px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        img {
            width: 130px;
            height: 192px;
        }
`