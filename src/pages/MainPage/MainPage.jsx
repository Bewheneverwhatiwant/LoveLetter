import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../../Components/Container/StyledImg';

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
height: 50px;
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
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export default function Component() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/letterpage');
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <StyledImg src={'LetterBag.png'} />
        <Next onClick={handleClick}>스티커 뜯기</Next>
      </PageContainer>
    </ContainerCenter>
  );
};