import { styled } from 'styled-components';

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

height: 8vh;
background-color: brown;
color: white;
gap: 10px;
`;

const Title = styled.h1`
font-size: 15px;
font-family: 'RIDIBatang';
color: white;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
`;

export default function Component() {
    return (
        <FooterContainer>
            <Detail>사랑과 애정을 담아, 나영이가</Detail>
        </FooterContainer>
    );
};