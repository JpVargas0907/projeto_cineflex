import React from 'react';
import Header from "../header/Header";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Sucess(props) {
    console.log(props.selectedSeats);
    return (
        <>
            <Header />
            <Content>
                <p>Pedido feito com sucesso!</p>
                <Data>
                    <BuyerData>
                        <h3>Filme e Sessão</h3>
                        <p>{props.movie.title}</p>
                        <p>{props.sessionInfo.day.date} - {props.sessionInfo.name}</p>
                    </BuyerData>

                    <BuyerData>
                        <h3>Ingressos</h3>
                        {props.selectedSeats.map((ticket, index) =>
                            <p key={index}>Assento {ticket}</p>
                        )}
                    </BuyerData>

                    <BuyerData>
                        <h3>Comprador</h3>
                        <p>Nome: {props.name}</p>
                        <p>CPF: {props.CPF}</p>
                    </BuyerData>
                </Data>
                <ReserveButton />
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

    > p {
        color: #247A6B;
        font-size: 24px;
        font-weight: 700;
        margin: 50px 0px 50px 0px;
        word-wrap: break-word;
        width: 160px;
    }
`

const Data = styled.div`
    width: 90vw;
    margin: 0 auto;
    text-align: start;
`

const BuyerData = styled.div`
    margin-bottom: 28px;

    h3 {
        font-weight: 700;
        font-size: 24px;
        color: #293845;
        margin-bottom: 10px;
    }

    p {
        font-size: 22px;
        color: #293845;
    }

`
function ReserveButton() {
    return (
        <Link to="/">
            <Button>
                <p>Voltar pra Home</p>
            </Button>
        </Link>

    );
}

const Button = styled.div`
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #FFFFFF;
        font-size: 18px;
    }
`
