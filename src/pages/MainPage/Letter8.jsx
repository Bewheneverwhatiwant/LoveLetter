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
                <To>수혁이와 시흥, 안양</To>
                <StyledImg src={'sh26.jpg'} width='100%' height='40vh' />
                <Text>너무 더워서 쉬러 들어갔던 곳!</Text>
                <StyledImg src={'sh27.jpg'} width='100%' height='40vh' />
                <Text>수혀기가 좋아하는 망둥 나영...</Text>
                <StyledImg src={'sh28.jpg'} width='100%' height='40vh' />
                <Text>같이 실컷 수영하고</Text>
                <StyledImg src={'sh29.jpg'} width='100%' height='40vh' />
                <Text>수혀기가 찾은 너무 예뻤던 숙소</Text>
                <StyledImg src={'sh30.jpg'} width='100%' height='40vh' />
                <Text>드로잉 카페에서 그림도 그리고</Text>
                <StyledImg src={'sh31.jpg'} width='100%' height='40vh' />
                <Text>부천 무한리필 칵테일도 마시고</Text>
                <StyledImg src={'sh32.jpg'} width='100%' height='40vh' />
                <Text>수혀기에게 받은 너무 감동적인 카드지갑과 편지 선물</Text>

            </CustomColumn>
        </Letter>
    )
}