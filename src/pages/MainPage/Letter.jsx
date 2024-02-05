import styled from 'styled-components';

const CustomColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '30px'};
`;

const Letter = styled.div`
    width: ${props => props.width || '70%'};
    height: ${props => props.height || '80vh'};
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

export default function Component() {

    return (
        <Letter>
            <CustomColumn>
                <p>여기는 1번 페이지</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
            </CustomColumn>
        </Letter>
    )
}