import styled from "styled-components";

export const AdminPanel = () => {
  return (
    <Wrapper>
      <Title>Администратор панели</Title>
      <p>Бул жерде админге тиешелүү функциялар болот.</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #b71c1c;
`;
