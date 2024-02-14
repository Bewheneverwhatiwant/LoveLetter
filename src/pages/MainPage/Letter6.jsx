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
                <To>따뜻한 우리의 일상</To>
                <StyledImg src={'sh15.jpg'} width='100%' height='40vh' />
                <Text>너무 소중한 수혁이</Text>
                <StyledImg src={'sh16.jpg'} width='100%' height='40vh' />
                <Text>점점 인형뽑기 고수로 거듭나는 수혀기</Text>
                <StyledImg src={'sh17.jpg'} width='100%' height='40vh' />
                <Text>우리는 냉동삼겹살을 조아해</Text>
                <StyledImg src={'sh18.jpg'} width='100%' height='40vh' />
                <Text>파이브가이즈도 같이 가고</Text>
                <StyledImg src={'sh19.jpg'} width='100%' height='40vh' />
                <Text>삼미미를 발견하고 단골이 된다!</Text>
                <StyledImg src={'sh20.jpg'} width='100%' height='40vh' />
                <Text>나영이와 수혁이의 최초의 인생네컷!</Text>

            </CustomColumn>
        </Letter>
    )
}