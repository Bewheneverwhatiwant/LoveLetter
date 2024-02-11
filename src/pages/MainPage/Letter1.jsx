import styled from 'styled-components';

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
                <To>수혁오빠에게♡(っ*’ᵕ’)’ᵕ’*c)♡</To>
                <Text>-------------------------------------</Text>
                <Text>안녕 오빠! 우리가 만난지 벌써 300일이야...!</Text>
                <Text>거의 1년이 다 되어가는 시간동안 오빠랑 정말 많은 추억을 쌓고,</Text>
                <Text>너무너무 행복한 시간들을 보냈어.</Text>
                <Text>300일 선물로 특별한걸 준비하고 싶어서 무엇을 할까 고민하다가,</Text>
                <Text>오빠를 위한 편지를 이렇게 써보기로 해써 :D</Text>
                <Text>다음 장이 궁금하다면, 아래의 버튼을 눌러줄래?</Text>
            </CustomColumn>
        </Letter>
    )
}