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

// 꽃 애니메이션
const tiltAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-10deg); }
`;

// 꿀벌 애니메이션
const moveAnimation = keyframes`
  0% { transform: translateX(0px); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(-20px); }
`;

// 애니메이션을 적용할 이미지에 대한 스타일 컴포넌트
const AnimatedImg = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  animation: ${props => props.animation}; // css 헬퍼 함수를 사용하지 않는 경우
  cursor: pointer;
`;

// 꽃에 적용될 애니메이션
const flowerAnimation = css`
  ${tiltAnimation} 1s infinite;
`;

// 꿀벌에 적용될 애니메이션
const beeAnimation = css`
  ${moveAnimation} 1s infinite;
`;

const Text = styled.div`
  color: black;
  font-size: 14px;
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
                {showChat && <StyledImg src={'chat.png'} width='100%' height='40vh' />}
                {showBee && <Text>앗! 꿀벌이 나타났어요! 꿀벌을 잡아볼까요?</Text>}
                {showBee && (
                    <AnimatedImg src={'Bee.png'} width='20%' height='10vh' animation={beeAnimation} onClick={handleBeeClick} />
                )}
                <AnimatedImg src={'flower2.png'} width='80%' height='30vh' animation={flowerAnimation} onClick={handleFlowerClick} />
            </PageContainer>
        </ContainerCenter>
    );
}
