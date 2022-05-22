import React from "react";
import styled from "styled-components";

export default function Header(){
    return (
        <Topo>
            <p>CINEFLEX</p>
        </Topo>
    );
}

const Topo = styled.div` 
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 66px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #E8833A;
        font-weight: 400;
        font-size: 34px;
    }
`;