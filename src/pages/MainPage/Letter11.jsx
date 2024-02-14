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
                <To>꿈만같았던 올 겨울 우리</To>
                <StyledImg src={'sh45.jpg'} width='100%' height='40vh' />
                <Text>우리의 첫 눈사람</Text>
                <StyledImg src={'sh46.jpg'} width='100%' height='40vh' />
                <Text>서로 너무 마음에 들어했던 사진 !!</Text>
                <StyledImg src={'sh47.jpg'} width='100%' height='40vh' />
                <Text>함께 맞는 함박눈, 강남 거리</Text>
                <StyledImg src={'sh48.png'} width='100%' height='40vh' />
                <Text>수혁이가 너무 보고싶어서 그렸던 그림!</Text>
                <StyledImg src={'sh49.jpg'} width='100%' height='40vh' />
                <Text>아무 날도 아닌데... 꽃다발과 편지, 초콜렛을 서프라이즈로 선물한 사랑스럽고 고마운 사랑하는 오빠</Text>
                <StyledImg src={'sh50.jpg'} width='100%' height='40vh' />
                <Text>춥고 낭만적이었던 겨울 한강 데이트</Text>
                <StyledImg src={'sh51.jpg'} width='100%' height='40vh' />
                <Text>수혁 오빠가 방학 전부터 날 생각하며 떠준 목도리를 매고 !!</Text>
            </CustomColumn>
        </Letter>
    )
}