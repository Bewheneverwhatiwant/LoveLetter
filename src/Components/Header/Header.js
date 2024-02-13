import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomColumn from '../Container/CustomColumn';
import CustomCenter from '../Container/CustomCenter';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    background-color: brown;
    color: white;
    gap: 10px;
`;

const Title = styled.h1`
font-size: 15px;
font-family: 'RIDIBatang';
color: white;
text-align: center;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
text-align: center;
`;

const CustomColumn2 = styled.div`
width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.gap || '30px'};
`;

export default function Header() {

    const navigate = useNavigate();

    const Back = () => {
        navigate('/');
    }

    return (
        <HeaderContainer onClick={Back}>
            <StyledImg src={'header_choco.png'} width='40px' height='30px' />
            <CustomColumn2 gap='5px'>
                <Title>2023년 2월 15일 목요일</Title>
                <Detail>valentine day & our 300 anniversary</Detail>
            </CustomColumn2>
            <StyledImg src={'ourday.png'} width='30px' height='30px' />
        </HeaderContainer>
    );
};