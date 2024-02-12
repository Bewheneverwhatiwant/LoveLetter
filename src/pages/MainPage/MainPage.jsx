import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../../Components/Container/StyledImg';
import { keyframes } from 'styled-components';
import ChocoBox from './ChocoBox';

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

const ChocoBoxContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Next = styled.button`
width: 20%;
height: 5vh;
border: none;
background-color: grey;
border-radius: 10px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Next2 = styled.button`
width: 20%;
height: 5vh;
border: none;
background-color: pink;
border-radius: 10px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ChocoButton = styled.button`
width: 20%;
height: 5vh;
border: none;
background-color: brown;
border-radius: 10px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Submit = styled.button`
width: 20%;
height: 5vh;
border: none;
background-color: pink;
border-radius: 10px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
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

const ModalContent = styled.div`
  width: 20%;
  height: 20%;
  transition: width 0.5s, height 0.5s; /* 부드러운 전환 효과 */

  display: flex;
  justify-content: center;
  align-items: center;
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

const LockModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: white;
  border-radius: 20px;

  color: black;
  font-family: 'RIDIBatang';
  font-size: 10px;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const LockModalContainer = styled.div`
position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  & > div {
    animation: ${growAnimation} 0.5s ease-out forwards;
  }
`;

const Input = styled.input`
width: 70%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AnswerMessage = styled.p`
  color: red;
`;

export default function Component() {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false); //애니메이션 모달
  const [isNext, setIsNext] = useState(false); //버튼 바뀜
  const [showLockModal, setShowLockModal] = useState(false); //질문 모달
  const [isHappy, setIsHappy] = useState(false); // 정답 맞힐 시 헤피 모달

  const [answers, setAnswers] = useState({
    date: '',
    nickname: '',
    favoriteFood: '',
  });

  const [message, setMessage] = useState('');

  const checkAnswers = () => {
    const { date, nickname, favoriteFood } = answers;
    const isDateCorrect = date === '4월 25일';
    const isNicknameCorrect = nickname === '기니피그';
    const isFavoriteFoodCorrect = favoriteFood === '마라탕';
    return isDateCorrect && isNicknameCorrect && isFavoriteFoodCorrect;
  };

  //happy 모달을 3초 후 없애기 우해 useEffect 사용
  useEffect(() => {
    let timer;
    if (isHappy) {
      timer = setTimeout(() => {
        setIsHappy(false);
      }, 3000); // 3초 후에 isHappy를 false로 설정
    }
    return () => clearTimeout(timer);
  }, [isHappy]);

  //정답 제출 시 isNext와 isHappy를 true로 하고,
  //happy 애니메이션 & 버튼이 Next에서 Next2 바뀌고(다른 함수),
  //Next2 클릭 시 letter 애니메이션 모달

  //정답 제출 확인
  const handleSubmit = () => {
    if (checkAnswers()) {
      setShowLockModal(false); //맞히면 질문 모달 없앰
      setMessage('');
      setIsNext(true); //스티커 뜯기 버튼이 바뀜 (다른 온 클릭 함수로)
      setIsHappy(true); // 정답 맞혀서 해피 모달
    } else {
      setMessage('답변이 틀렸습니다. 다시 시도해주세요.');
      setAnswers({ date: '', nickname: '', favoriteFood: '' }); //input 초기화
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  //정답 맞힌 후, Next2 클릭 시 letter 애니메이션 효과 후 페이지 이동
  const handleClick = () => {
    setShowModal(true);
    setTimeout(() => {
      navigate('/letterpage'); //3초 후 페이지 이동
    }, 3000);
  };

  const Choco = () => {
    navigate('/chocopage');
  }

  return (
    <ContainerCenter>
      <PageContainer>
        <StyledImg src={'icon_letter_close.png'} width='80%' height='40vh' />
        {isNext ? (
          <Next2 onClick={() => handleClick()}>스티커 뜯기</Next2>
        ) : (
          <Next onClick={() => setShowLockModal(true)}>스티커 뜯기</Next>
        )}

        {showModal && (
          <Modal>
            <ModalContent>
              <StyledImg src={'icon_letter_open.png'} width='70%' height='40vh' />
            </ModalContent>
          </Modal>
        )}
        {showLockModal && (
          <LockModalContainer>
            <LockModal>
              <Input name="date" placeholder="처음 만난 날짜는 언제인가요?" value={answers.date} onChange={handleChange} />
              <Input name="nickname" placeholder="여자친구의 별명은 무엇인가요?" value={answers.nickname} onChange={handleChange} />
              <Input name="favoriteFood" placeholder="여자친구가 가장 좋아하는 음식은 무엇인가요?" value={answers.favoriteFood} onChange={handleChange} />
              <Submit onClick={handleSubmit}>정답 제출</Submit>
              {message && <AnswerMessage>{message}</AnswerMessage>}
            </LockModal>
          </LockModalContainer>
        )}
        {isHappy && (
          <Modal>
            <ModalContent>
              <StyledImg src={'icon_happy.png'} width='70%' height='40vh' />
            </ModalContent>
          </Modal>
        )}
      </PageContainer>
      <ChocoBoxContainer>
        <ChocoBox />
      </ChocoBoxContainer>
    </ContainerCenter>
  );
};