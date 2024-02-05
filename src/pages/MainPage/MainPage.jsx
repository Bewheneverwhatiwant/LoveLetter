import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../../Components/Container/StyledImg';
import { keyframes } from 'styled-components';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    gap: 30px;

    position: relative;
`

const Next = styled.button`
width: 200px;
height: 80px;
border: none;
background-color: #5EB371;
border-radius: 20px;
color: white;
font-family: 'RIDIBatang';
font-size: 20px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 15px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const growAnimation = keyframes`
  from {
    width: 20%;
    height: 20%;
  }
  to {
    width: 100%;
    height: 100%;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  & > div {
    animation: ${growAnimation} 0.5s ease-out forwards;
  }
`;

const ModalContent = styled.div`
  width: 20%; /* 초기 크기 설정 */
  height: 20%;
  transition: width 0.5s, height 0.5s; /* 부드러운 전환 효과 */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Component() {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    setTimeout(() => {
      navigate('/letterpage'); // 3초 후 페이지 이동
    }, 3000);
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <StyledImg src={'icon_letter_close.png'} width='70%' height='50vh' />
        <Next onClick={handleClick}>스티커 뜯기</Next>
        {showModal && (
          <Modal>
            <ModalContent>
              <StyledImg src={'icon_letter_open.png'} />
            </ModalContent>
          </Modal>
        )}
      </PageContainer>
    </ContainerCenter>
  );
};