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
                <To>열심히 공부하고 열심히 놀았던 우리</To>
                <StyledImg src={'sh10.jpg'} width='100%' height='40vh' />
                <Text>우리의 첫 프로젝트!</Text>
                <StyledImg src={'sh11.jpg'} width='100%' height='40vh' />
                <Text>이거 오빠가 하는 거 처음 봤을 때, 어떻게 사람 손이 이렇게 빨리 움직이는지 충격이었는데...</Text>
                <StyledImg src={'sh12.jpg'} width='100%' height='40vh' />
                <Text>오빠의 가르침으로 타짜가 된 나영이!</Text>
                <StyledImg src={'sh13.jpg'} width='100%' height='40vh' />
                <Text>반주를 좋아하는 우리</Text>
                <StyledImg src={'sh14.jpg'} width='100%' height='40vh' />
                <Text>ㅋㅋㅋㅋㅋ 이거 너무 웃겨</Text>
            </CustomColumn>
        </Letter>
    )
}