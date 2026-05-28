import styled from "styled-components";

export const Testing = () => {
  return (
    <Wrapper>
      <TopBar>
        <StudentInfo>
          Слушатель <strong>(Анапияев Мурзабек Исамидинович)</strong>
        </StudentInfo>
        <ExitBtn>Выход</ExitBtn>
      </TopBar>

      <ContentArea>
        <PhotoCard>
          <PhotoBox>
            <AvatarPlaceholder>
              <span>👤</span>
            </AvatarPlaceholder>
          </PhotoBox>
        </PhotoCard>
      </ContentArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: #e8eaf0;
`;

const TopBar = styled.div`
  background: #1565c0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

const StudentInfo = styled.span`
  font-size: 13px;
  color: white;
`;

const ExitBtn = styled.button`
  background: transparent;
  border: none;
  color: #90caf9;
  font-size: 13px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: white;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const PhotoCard = styled.div`
  background: #c5c8d6;
  border-radius: 8px;
  padding: 12px;
  width: 700px;
`;

const PhotoBox = styled.div`
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
`;

const AvatarPlaceholder = styled.div`
  width: 280px;
  height: 360px;
  background: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
`;
