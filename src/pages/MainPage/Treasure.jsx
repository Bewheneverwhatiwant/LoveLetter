import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import CustomCenter from '../../Components/Container/CustomCenter';
import StyledImg from '../../Components/Container/StyledImg';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const PageContainer = styled(ContainerCenter)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    gap: 10px;

    position: relative;
`

const Button = styled.button`
background-color: transparent;
color: brown;
font-size: 16px;
font-family: 'RIDIBatang';

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

gap: 10px;
border-radius: 20px;
border: 1px solid pink;
`;

const Title = styled.h1`
color: pink;
font-size: 16px;
font-family: 'RIDIBatang';
line-height: 20px; 
`;

export default function Component() {

    const [showTitle, setShowTitle] = useState(false);

    const toggleTitle = () => {
        setShowTitle(!showTitle);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <StyledImg src={'treasure.png'} width='80%' height='30vh' />
                <Button onClick={toggleTitle}>
                    <StyledImg src={'key.png'} width='30px' height='30px' />
                    <Title>힌트를 보려면 누르세요</Title>
                </Button>
                {showTitle && (
                    <Title>옆에 있는 나영이에게<br />직접 물어보세요❁ᴗ͈ ˬ ᴗ͈)⁾⁾⁾</Title>
                )}
            </PageContainer>
        </ContainerCenter>
    );
}
