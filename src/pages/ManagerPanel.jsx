import styled from "styled-components";

export const ManagerPanel = () => {
  return (
    <Wrapper>
      <Title>Менеджер панели</Title>
      <p>Бул жерде менеджерге тиешелүү функциялар болот.</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #1a237e;
`;
