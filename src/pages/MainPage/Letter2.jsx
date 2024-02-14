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
                <To>우리가 처음 만난 날</To>
                <StyledImg src={'sh1.jpg'} width='100%' height='40vh' />
                <Text>내가 수혁이한테 깜짝 서프라이즈해주자고 했던거 기억난다ㅋㅋㅋㅋ</Text>
                <StyledImg src={'sh2.jpg'} width='100%' height='40vh' />
                <Text>너무 아가 수혁이!</Text>
                <StyledImg src={'sh3.jpg'} width='100%' height='40vh' />
                <Text>우리의 첫데이트. 홍대개미!</Text>
            </CustomColumn>
        </Letter>
    )
}