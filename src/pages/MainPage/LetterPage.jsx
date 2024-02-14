import React, { useState } from 'react';
import styled from 'styled-components';
import Letter1 from './Letter1';
import Letter2 from './Letter2';
import Letter3 from './Letter3';
import Letter4 from './Letter4';
import Letter5 from './Letter5';
import Letter6 from './Letter6';
import Letter7 from './Letter7';
import Letter8 from './Letter8';
import Letter9 from './Letter9';
import Letter10 from './Letter10';
import Letter11 from './Letter11';
import Letter12 from './Letter12';
import Letter13 from './Letter13';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const PageContainer = styled(ContainerCenter)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  gap: 30px;
`;

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
    const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호

    //현재 페이지에 따라 렌더링할 컴포넌트 결정
    const renderLetter = () => {
        switch (currentPage) {
            case 1:
                return <Letter1 />;
            case 2:
                return <Letter2 />;
            case 3:
                return <Letter3 />;
            case 4:
                return <Letter4 />;
            case 5:
                return <Letter5 />;
            case 6:
                return <Letter6 />;
            case 7:
                return <Letter7 />;
            case 8:
                return <Letter8 />;
            case 9:
                return <Letter9 />;
            case 10:
                return <Letter10 />;
            case 11:
                return <Letter11 />;
            case 12:
                return <Letter12 />;
            case 13:
                return <Letter13 />;
            default:
                return <Letter1 />;
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                {renderLetter()}
                <CustomRow>
                    {currentPage > 1 && ( //이전 페이지가 있을 때만 '이전 장으로' 버튼을 보여줌
                        <Next onClick={() => setCurrentPage(currentPage - 1)}>
                            <CustomRow gap="5px">
                                <CustomCenter>
                                    <IoMdArrowBack size="10px" color="white" />
                                </CustomCenter>
                                <CustomCenter>이전 장으로</CustomCenter>
                            </CustomRow>
                        </Next>
                    )}
                    {currentPage < 13 && ( //다음 페이지가 있을 때만 '다음 장으로' 버튼을 보여줌
                        <Next onClick={() => setCurrentPage(currentPage + 1)}>
                            <CustomRow gap="5px">
                                <CustomCenter>다음 장으로</CustomCenter>
                                <CustomCenter>
                                    <IoMdArrowForward size="10px" color="white" />
                                </CustomCenter>
                            </CustomRow>
                        </Next>
                    )}
                </CustomRow>
            </PageContainer>
        </ContainerCenter>
    );
}
