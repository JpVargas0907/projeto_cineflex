import React from "react";
import styled from "styled-components";

export default function Footer(props){
    return (
        <Content>
            <Filmstyle>
                <img src={props.posterURL} alt=""/>
            </Filmstyle> 
            <Info>
                <p>{props.title}</p>
                <p></p>
            </Info> 
        </Content>
    );
}

const Content = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 120px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Filmstyle = styled.div`
        width: 64px;
        height: 90px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-right: 10px;

        img {
            width: 48px;
            height: 72px;
        }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-size: 26px;
        color: #293845;
    }
`