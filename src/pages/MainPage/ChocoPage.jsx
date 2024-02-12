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

const ChocoContainer = styled(ContainerCenter)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: opacity 0.6s ease;
  z-index: 2; //텍스트 위에 이미지가 보이도록

  ${(props) =>
        props.isFlipped &&
        css`
      opacity: 0; //뒤집힌 상태에서 이미지를 투명하게
      z-index: 0;
    `}
`;

const CardText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0; //처음에는 텍스트를 숨김

  ${(props) =>
        props.isFlipped &&
        css`
      opacity: 1; //뒤집힌 상태에서 텍스트를 보이게 함
    `}
`;

const Text = styled.a`
margin: 20px;
font-size:16px;
font-family: 'RIDIBatang';
color: brown;
line-height: 20px; 
text-align: center;
`;

const WarningText = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  text-align: center;
  color: red;
  font-size:10px;
font-family: 'RIDIBatang';
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${(props) =>
        props.show &&
        css`
      opacity: 1;
    `}
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Teddy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: ${moveUpDown} 1s ease-in-out infinite;
`;

export default function Component() {
    const [flipped, setFlipped] = useState([false, false, false, false]);
    const [showWarning, setShowWarning] = useState([false, false, false, false]);

    const texts = ['너무 사랑해💕✿ܓ', '정말 좋아해💛🎕', '매일 고마워💓ᰔ', '가장 소중해°ε♡з°💚'];

    const handleFlip = (index) => {
        setFlipped(flipped.map((flip, i) => (i === index ? !flip : flip)));

        // "충치조심!" 텍스트 표시
        const newShowWarning = [...showWarning];
        newShowWarning[index] = true;
        setShowWarning(newShowWarning);

        setTimeout(() => {
            const newShowWarning = [...showWarning];
            newShowWarning[index] = false;
            setShowWarning(newShowWarning);
        }, 1500);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <Teddy>
                    <StyledImg src={'teddybear.png'} width='60px' height='60px' />
                </Teddy>
                <StyledImg src={'valentine.png'} width='100px' height='100px' />
                <Text>나영이가 준비한 발렌타인데이 선물이<br />도착했어요!★彡<br />
                    하나씩 까먹어볼까요?🧡</Text>
                <ChocoContainer>
                    {[1, 2, 3, 4].map((num, index) => (
                        <CardContainer key={index}>
                            <WarningText show={showWarning[index]}>충치조심!</WarningText>
                            <CardImage
                                src={`Choco${num}.png`}
                                alt={`Choco${num}`}
                                isFlipped={flipped[index]}
                                onClick={() => handleFlip(index)}
                            />
                            <CardText onClick={() => handleFlip(index)} isFlipped={flipped[index]}>{texts[index]}</CardText>
                        </CardContainer>
                    ))}
                </ChocoContainer>
            </PageContainer>
        </ContainerCenter>
    );
}
