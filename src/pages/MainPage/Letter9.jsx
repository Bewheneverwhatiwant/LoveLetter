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
                <To>수혁이와 개강 직전과 개강 후</To>
                <StyledImg src={'sh33.jpg'} width='100%' height='40vh' />
                <Text>개강 직전 해커톤이 끝나고</Text>
                <StyledImg src={'sh34.jpg'} width='100%' height='40vh' />
                <Text>다시 수혁이의 장인 계란말이를 먹을 수 있어서 기뻤다 !</Text>
                <StyledImg src={'sh35.jpg'} width='100%' height='40vh' />
                <Text>치킨까지 만들어버린 너무 대단한 셰프 수혁</Text>
                <StyledImg src={'sh36.jpg'} width='100%' height='40vh' />
                <Text>우리는 같이 축제도 즐겼고</Text>
                <StyledImg src={'sh37.jpg'} width='100%' height='40vh' />
                <Text>너무 맛있었던 차돌말이 팽이버섯!!!</Text>
            </CustomColumn>
        </Letter>
    )
}