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

const tiltAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const StyledImg1 = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    animation: ${tiltAnimation} 2s infinite; // 2초 동안 무한 반복
`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const StyledImg2 = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    animation: ${moveAnimation} 2s infinite; // 2초 동안 무한 반복
`;

const StyledImg3 = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};

`;

const Text = styled.div`
  color: brown;
  font-size: 10px;
font-family: 'RIDIBatang';
text-align: left;
`;

const StyledImg_Text = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    position: relative;
    z-index: 1;
`;

const LastLetter = styled.a`
    color: black;
    font-size: 16px;
    font-family: 'RIDIBatang';
    text-align: left;
    line-height: 20px;
    position: absolute;
    z-index: 2;
   top: 40%;
   left: 10%;
`;

const OverlayContainer = styled.div`
display: flex;
flex-direction: column;
    position: relative; //여기 컨테이너 내의 절대 위치 요소들이 기준이 됨
    width: 100%;
    height: 40vh;
`;

export default function Component() {

    const [showBee, setShowBee] = useState(false);
    const [showChat, setShowChat] = useState(false);

    const handleFlowerClick = () => {
        setShowBee(true);
    };

    const handleBeeClick = () => {
        setShowChat(true);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                {showChat &&
                    <OverlayContainer>
                        <StyledImg_Text src={'chat.png'} width='100%' height='40vh' />
                        <LastLetter>300일동안 나와 함께해줘서<br />너무 고마워 오빠( ˘ ³˘(◡‿◡˶)<br />
                            내가 많이 사랑해( . ̫ .)💗</LastLetter>
                    </OverlayContainer>
                }
                {showBee && <Text>앗! 꿀벌이 나타났어요! 꿀벌을 잡아볼까요?</Text>}
                {showBee && (
                    <StyledImg2 src={'Bee.png'} width='20%' height='10vh' onClick={handleBeeClick} />
                )}
                <Text>꽃다발을 잡아볼까요?</Text>
                <StyledImg1 src={'flower2.png'} width='80%' height='30vh' onClick={handleFlowerClick} />
            </PageContainer>
        </ContainerCenter>
    );
}
