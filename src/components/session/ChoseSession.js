import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import Footer from '../footer/Footer';
import axios from 'axios';
import { useEffect } from 'react';

export default function ChoseSession(props) {
    const { filmId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`);

        promise.then(response => {
            props.setMovie(response.data);
            props.setSessionList([...response.data.days]);
        })
    }, [])

    return (
        <>
            <Content>
                <p>Selecione o horário</p>
                <Sessions>
                    {props.sessionList.map((sessions, index) =>
                        <SessionHour key={index} id={sessions.id} weekday={sessions.weekday} date={sessions.date} showtimes={sessions.showtimes} />
                    )}
                </Sessions>
            </Content>
            <Footer title={props.movie.title} posterURL={props.movie.posterURL} />
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
    margin-bottom: 140px;

    > p {
        color: #293845;
        font-size: 24px;    
        margin: 50px 0px 50px 0px;
    }
`
const Sessions = styled.div`
    text-align: start;
    width: 100%;
    margin-left: 24px;
    display: flex;
    flex-wrap: wrap;
`

function SessionHour(props) {
    return (
        <SessionBox>
            <h3>{props.weekday} - {props.date}</h3>
            {props.showtimes.map((hour, index) =>
                <Link to={`/chose-seat/${hour.id}`}>
                    <SessionButton key={index}>
                        <p>{hour.name}</p>
                    </SessionButton>
                </Link>
            )}
        </SessionBox>
    );
}

const SessionBox = styled.div`
    display: flex;
    flex-wrap: wrap;

   > h3 {
        width: 100vw;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
        margin-bottom: 22px;
   }


`
const SessionButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 22px;

    > p {
       color: #FFFFFF;
       font-size: 18px;
   }
`


