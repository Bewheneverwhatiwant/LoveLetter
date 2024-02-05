import styled from 'styled-components';
import Letter from './Letter';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';
import { IoMdArrowBack } from 'react-icons/io'
import { IoMdArrowForward } from 'react-icons/io';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    gap: 30px;
`

const Next = styled.button`
width: 100px;
height: 5vh;
border: none;
background-color: #5EB371;
border-radius: 20px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export default function Component() {
    return (
        <ContainerCenter>
            <PageContainer>
                <Letter />
                <CustomRow>
                    <Next>
                        <CustomRow gap='5px'>
                            <CustomCenter>
                                <IoMdArrowBack size='10px' color='white' />
                            </CustomCenter>
                            <CustomCenter>
                                이전 장으로
                            </CustomCenter>
                        </CustomRow>
                    </Next>
                    <Next>
                        <CustomRow gap='5px'>
                            <CustomCenter>
                                다음 장으로
                            </CustomCenter>
                            <CustomCenter>
                                <IoMdArrowForward size='10px' color='white' />
                            </CustomCenter>
                        </CustomRow>
                    </Next>
                </CustomRow>
            </PageContainer>
        </ContainerCenter>
    );
};