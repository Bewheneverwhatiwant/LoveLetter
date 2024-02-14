import styled from 'styled-components';
import StyledImg from '../../Components/Container/StyledImg';

const CustomColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '30px'};
`;

const Letter = styled.div`
    width: ${props => props.width || '70%'};
    height: ${props => props.height || '70vh'};
    background-color: #A3CCAC;
    border: none;
    border-radius: 10px;
    padding: 30px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 20px;
        margin: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 20px;
        margin: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #3CCC5C, #2CAE49);
        border-radius: 20px;
        margin: 5px;
    }
`;

const To = styled.h1`
font-size:20px;
font-family: 'RIDIBatang';
color: white;
`;

const Text = styled.a`
font-size:13px;
font-family: 'RIDIBatang';
color: white;
line-height: 16px; 
`;

export default function Component() {

    return (
        <Letter>
            <CustomColumn>
                <To>우리의 여의도 feat. 코노모</To>
                <StyledImg src={'sh52.jpg'} width='100%' height='40vh' />
                <Text>썰매를 기다리는 수혁이가 너무 예뻐서...</Text>
                <StyledImg src={'sh53.jpg'} width='100%' height='40vh' />
                <Text>빙어 누가누가 더 많이 잡나 내기는 내가 승 !</Text>
                <StyledImg src={'sh54.jpg'} width='100%' height='40vh' />
                <Text>코노모와 함께 우리 아지트 삼미미도 가고</Text>
                <StyledImg src={'sh55.jpg'} width='100%' height='40vh' />
                <Text>수혀기가 맥주 무한리필 가게도 데려가줬다 !</Text>
                <StyledImg src={'sh56.jpg'} width='100%' height='40vh' />
                <Text>카드게임 달인이 되어가는 예쁜 수혀기</Text>
                <StyledImg src={'sh57.jpg'} width='100%' height='40vh' />
                <Text>아직 2024년 새해라며 떡국 서비스를 받은 우리</Text>
            </CustomColumn>
        </Letter>
    )
}