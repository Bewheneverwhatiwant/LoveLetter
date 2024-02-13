import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const ChocoBoxContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChocoButton = styled.button`
  width: 60%;
  height: 5vh;
  border: none;
  background-color: brown;
  border-radius: 10px;
  color: white;
  font-family: 'RIDIBatang';
  font-size: 10px;
  position: absolute;
  z-index: 2;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  z-index: 1;
`;

const ShadowText = styled.div`
  font-size: 16px;
  color: brown;
  font-family: 'RIDIBatang';
  z-index: 3;
  line-height: 20px;
  text-align: center;
`;

const WrongClickText = styled.span`
  position: absolute;
  font-size: 14px;
  color: red;
  z-index: 4;
`;

export default function Component() {
  const navigate = useNavigate();
  const [showBoxes, setShowBoxes] = useState([]);
  const [showText, setShowText] = useState(false);
  const [clickedStates, setClickedStates] = useState(Array(5).fill(false));

  useEffect(() => {
    if (showBoxes.length > 1) setShowText(true); //showBoxes 업데이트 시 showText 상태 업데이트
  }, [showBoxes]); //showBoxes가 변경될 때마다 실행

  const createChocoBoxes = () => {
    const boxes = [];
    const linkIndex = Math.floor(Math.random() * 5); //0~4 중 랜덤 인덱스로 페이지 이동 버튼이 결정됨
    for (let i = 0; i < 5; i++) {
      boxes.push(
        // <ChocoBoxContainer key={i}>
        //   <StyledImg src={'chocobox.png'} />
        //   <ChocoButton onClick={() => { if (i === linkIndex) navigate('/chocopage'); }}>{i === linkIndex ? '포장 뜯기' : '포장 뜯기'}</ChocoButton>
        // </ChocoBoxContainer>
        <ChocoBoxContainer key={i}>
          {clickedStates[i] && <WrongClickText>가나다라마바사</WrongClickText>}
          <StyledImg src={'chocobox.png'} />
          <ChocoButton onClick={() => {
            if (i === linkIndex) {
              navigate('/chocopage');
            } else {
              const newClickedStates = [...clickedStates];
              newClickedStates[i] = true;
              setClickedStates(newClickedStates);
            }
          }}>{i === linkIndex ? '포장 뜯기' : '포장 뜯기'}</ChocoButton>
        </ChocoBoxContainer>
      );
    }
    setShowBoxes(boxes);
    setShowText(true);
  };

  return (
    <Container>
      {showText && <ShadowText>그림자 분신술! (=ↀωↀ=)✧<br />다음 중 진짜 초콜렛 상자는 무엇일까요?</ShadowText>}
      {showBoxes.length > 0 ? showBoxes : (
        <ChocoBoxContainer>
          <StyledImg src={'chocobox.png'} />
          <ChocoButton onClick={createChocoBoxes}>발렌타인</ChocoButton>
        </ChocoBoxContainer>
      )}
    </Container>
  );
}