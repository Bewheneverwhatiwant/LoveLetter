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
                <To>우리가 처음 만난 날</To>
            </CustomColumn>
        </Letter>
    )
}