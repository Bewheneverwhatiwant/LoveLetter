import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2열 격자로 배치
  gap: 30px;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  width: 100px; // 카드 크기 조정
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
  z-index: 2; // 텍스트 위에 이미지가 보이도록 z-index 설정

  ${(props) =>
        props.isFlipped &&
        css`
      opacity: 0; // 뒤집힌 상태에서 이미지를 투명하게 만듦
      z-index: 0; // 텍스트가 보이도록 z-index 변경
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
  z-index: 1; // 이미지보다 낮은 z-index
  opacity: 0; // 처음에는 텍스트를 숨김

  ${(props) =>
        props.isFlipped &&
        css`
      opacity: 1; // 뒤집힌 상태에서 텍스트를 보이게 함
    `}
`;

export default function Component() {
    const [flipped, setFlipped] = useState([false, false, false, false]);

    const handleFlip = (index) => {
        setFlipped(flipped.map((flip, i) => (i === index ? !flip : flip)));
    };

    return (
        <ContainerCenter>
            <PageContainer>
                {[1, 2, 3, 4].map((num, index) => (
                    <CardContainer key={index}>
                        <CardImage
                            src={`Choco${num}.png`}
                            alt={`Choco${num}`}
                            isFlipped={flipped[index]}
                            onClick={() => handleFlip(index)}
                        />
                        <CardText isFlipped={flipped[index]}>초코{num}</CardText>
                    </CardContainer>
                ))}
            </PageContainer>
        </ContainerCenter>
    );
}
