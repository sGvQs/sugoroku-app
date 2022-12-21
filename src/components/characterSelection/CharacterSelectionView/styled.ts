import styled from '@emotion/styled';

export const StyledContentWrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 960px) {
    gap: 5vh;
  }
`;

export const StyledFinalContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
`;

export const StyledFinalSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledFinalButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const StyledTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const StyledInputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const StyledParagraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  width: 45vw;
`;
