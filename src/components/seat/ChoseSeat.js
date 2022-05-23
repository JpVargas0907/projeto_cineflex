import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Footer from '../footer/Footer';
import { useState } from 'react';

export default function ChoseSeat(props) {
    const { sessionId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then(response => {
            props.setSessionInfo(response.data);
            props.setSeatList(response.data.seats);
        })
    }, [])

    return (
        <>
            <Content>
                <p>Selecione o(s) assentos</p>
                <Seats>
                    {props.seatList.map((seat, index) =>
                        <Seat key={index} id={seat.id} name={seat.name} isAvailable={seat.isAvailable} selectedSeats={props.selectedSeats} setSelectedSeats={props.setSelectedSeats}/>
                    )}
                    <StatusChair>
                        <SelectedChair>
                            <div></div>
                            <p>Selecionado</p>
                        </SelectedChair>
                        <AvailableChair>
                            <div></div>
                            <p>Disponível</p>
                        </AvailableChair>
                        <UnvailableChair>
                            <div></div>
                            <p>Indisponível</p>
                        </UnvailableChair>
                    </StatusChair>
                </Seats>
                <ClientForm name={props.name} setName={props.setName} CPF={props.CPF} setCPF={props.setCPF}/>
                <ReserveButton />
            </Content>
            <Footer title={props.movie.title} posterURL={props.movie.posterURL} hour={props.sessionInfo.name} />
        </>
    );
}

const Content = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100vw;
    justify-content: center;
    text-align: center;
    margin-bottom: 140px;

    > p {
        width: 100%;
        color: #293845;
        font-size: 24px;    
        margin: 50px 0px 50px 0px;
    }
    `

const Seats = styled.div`
        width: 100vw;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
    `

function Seat(props) {
    const [selected, setSelected] = useState(false);

    const [color, setColor] = useState(
        props.isAvailable ? "#C3CFD9" : "#FBE192"
    )

    function reserveSeat() {
        console.log(props.selectedSeats)

        if (selected === false && props.isAvailable) {
            setColor("#8DD7CF");
            setSelected(true);
            props.setSelectedSeats([...props.selectedSeats, props.name]);
        } else if (selected === true) {
            setColor("#C3CFD9");
            setSelected(false);
        } else if (!props.isAvailable) {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <Chair onClick={reserveSeat} status={color}>
            <p>{props.name}</p>
        </Chair>
    );
}

const Chair = styled.div`
        width: 26px;
        height: 26px;
        left: 24px;
        top: 158px;
        margin: 0px 7px 24px 0px;
        background: ${props => props.status};
        border: 1px solid #808F9D;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            font-size: 12px;
            color: #000000;
        }
    `

const StatusChair = styled.div`
    width: 90vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;

    p{
        color: #4E5A65;
        font-size: 12px;
    }
`

const SelectedChair = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        width: 24px;
        height: 24px;
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
        border-radius: 17px;
        margin-bottom: 2px;
    }

`
const AvailableChair = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        width: 24px;
        height: 24px;
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 17px;
        margin-bottom: 2px;

    }
`
const UnvailableChair = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        width: 24px;
        height: 24px;
        background: #FBE192;
        border: 1px solid #F7C52B;
        border-radius: 17px;
        margin-bottom: 2px;
    }
`

function ClientForm(props) {

    return (
        <Forms>
            <form>
                <label for="lname">Nome do comprador:</label>
                <input type="text" placeholder="  Digite seu nome ..." onChange={e => props.setName(e.target.value)}/>
                <label for="lname">CPF do comprador:</label>
                <input type="text" placeholder="  Digite seu CPF ..." onChange={e => props.setCPF(e.target.value)}/>
            </form>
        </Forms>
    );
}

const Forms = styled.div`
    
    form {
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 90vw;
    }

    label {
        color: #293845;
        font-size: 18px;
        margin-left: 0px;
    }

    input {
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 100%;
        height: 50px;
        color: #AFAFAF;
        font-size: 18px;
        font-style: italic;
        margin-bottom: 10px;
    }
`

function ReserveButton() {
    return (
        <Link to={'/sucess'}>
            <Button>
                <p>Reservar Assento(s)</p>
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