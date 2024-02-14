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
                <Text>300일 동안 나와 함께해줘서 너무 사랑하고 고마워 수혁오빠!</Text>
                <Text>칠칠맞고, 실수가 잦은 말썽쟁이 여자친구인데도 항상 자상하고 다정하게 보듬어줘서 난 너무 행복해</Text>
                <Text>나를 이렇게나 행복한 사람으로 만들어줘서 고마워</Text>
                <Text>내가 오빠로 인해 행복한 만큼, 오빠도 나로 인해 행복하도록 언제나 오빠를 사랑하고 소중히 아낄게</Text>
                <Text>너무너무 사랑하고 고마워 수혁오빠, 발렌타인데이도 축하해</Text>
                <Text>사랑해</Text>
                <Text>-오빠의 반려 기니피그 나영이가-</Text>
            </CustomColumn>
        </Letter>
    )
}