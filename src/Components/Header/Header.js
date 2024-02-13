import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 8vh;
    background-color: brown;
    color: white;
    gap: 10px;
`;

const Title = styled.h1`
font-size: 15px;
font-family: 'RIDIBatang';
color: white;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
`;

export default function Header() {

    return (
        <HeaderContainer>
            <Title>2023년 2월 15일 목요일</Title>
            <Detail>valentine day & our 300 anniversary</Detail>
        </HeaderContainer>
    );
};