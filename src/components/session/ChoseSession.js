import React from 'react';
import Header from "../header/Header";
import styled from "styled-components";
import Footer from '../footer/Footer';

export default function Session() {
    return (
        <>
            <Header />
            <Content>
                <p>Selecione o horário</p>
                <Sessions>
                    <p>Quinta-feira - 24/05/2022</p>
                    <SessionHour>
                        <p>15:00</p>
                    </SessionHour>
                    <SessionHour>
                        <p>17:00</p>
                    </SessionHour>
                    <SessionHour>
                        <p>18:00</p>
                    </SessionHour>
                </Sessions>
            </Content>
            <Footer />
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

    > p{
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
        margin-bottom: 24px;
    }
`

const SessionHour = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 82px;
   height: 42px;
   background: #E8833A;
   border-radius: 3px;
   margin-right: 8px;

   > p {
       color: #FFFFFF;
       font-size: 18px;
   }
`


