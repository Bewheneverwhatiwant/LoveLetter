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
                <To>소중한 수혁이와의 순간</To>
                <StyledImg src={'sh21.jpg'} width='100%' height='40vh' />
                <Text>멋진 군필 수혀기!!</Text>
                <StyledImg src={'sh22.jpg'} width='100%' height='40vh' />
                <Text>사랑해 오빠</Text>
                <StyledImg src={'sh23.jpg'} width='100%' height='40vh' />
                <Text>야한 방탈출 하러 갔는데 수혀기가 너무 귀여워서 찍은 사진</Text>
                <StyledImg src={'sh24.jpg'} width='100%' height='40vh' />
                <Text>19!</Text>
                <StyledImg src={'sh25.jpg'} width='100%' height='40vh' />
                <Text>이 날, 우리는 처음으로 인형뽑기 대풍년을 겪었다!</Text>

            </CustomColumn>
        </Letter>
    )
}