import React from 'react';
import Header from "../header/Header";
import styled from "styled-components";
import Footer from '../footer/Footer';

export default function Seat() {
    return (
        <>
            <Header />
            <Content>
                <p>Selecione o(s) assentos</p>
                <Seats>
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
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
                <ClientForm />
                <ReserveButton />
            </Content>
            <Footer />
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

const Chair = styled.div`
        width: 26px;
        height: 26px;
        left: 24px;
        top: 158px;
        margin: 0px 7px 24px 0px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 50%;
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
        background: #C3CFD9;
        border: 1px solid #7B8B99;
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
        background: #8DD7CF;;
        border: 1px solid #1AAE9E;
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

function ClientForm() {
    return (
        <Forms>
            <form>
                <label for="lname">Nome do comprador:</label>
                <input type="text" placeholder="  Digite seu nome ..." />
                <label for="lname">CPF do comprador:</label>
                <input type="text" placeholder="  Digite seu CPF ..." />
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

function ReserveButton(){
    return (
        <Button>
            <p>Reservar Assento(s)</p>
        </Button>
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