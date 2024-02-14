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
                <To>우리의 따뜻한 겨울</To>
                <StyledImg src={'sh38.jpg'} width='100%' height='40vh' />
                <Text>수혁이가 선물해준 터치펜과 편지... 근데 끝이 아니었어 !!!</Text>
                <StyledImg src={'sh39.jpg'} width='100%' height='40vh' />
                <Text>아직도 생생한 이 날 감동 ㅠㅠㅠ 슬프고 고맙고 찡하구...</Text>
                <StyledImg src={'sh40.png'} width='100%' height='40vh' />
                <Text>수혀기가 준 펜으로 그린 첫 우리 그림!</Text>
                <StyledImg src={'sh41.jpg'} width='100%' height='40vh' />
                <Text>수혀기의 노란 목도리를 뺫어 쓰고 짝은 인생네컷</Text>
                <StyledImg src={'sh42.jpg'} width='100%' height='40vh' />
                <Text>내 비니가 너무 잘 어울리는 포근한 수혀기</Text>
                <StyledImg src={'sh43.jpg'} width='100%' height='40vh' />
                <Text>돈 많이 벌어서 티파니 앤 코 반지로 다시 프러포즈 할게...</Text>
                <StyledImg src={'sh44.jpg'} width='100%' height='40vh' />
                <Text>소라게 나영</Text>
            </CustomColumn>
        </Letter>
    )
}