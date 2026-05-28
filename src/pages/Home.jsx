import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Центр облуживание студентов",
    icon: "",
    bg: "",
  },
  {
    title: "Образовательный портал",
    icon: "",
    bg: "",
  },
  {
    title: "Поиск студентов",
  },
  {
    title: "NewLMS",
    icon: "",
    bg: "",
  },
  { title: "AVN Журнал", icon: "", bg: "" },
  { title: "Абитурент", icon: "", bg: "" },
];

export const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (title === "Образовательный портал") {
      navigate("/login");
    }
  };
  return (
    <Container>
      <Title>Home Главная страница</Title>

      <CardWrapper>
        {cards.map((card, index) => (
          <Card key={index} onClick={() => handleCardClick(card.title)}>
            <h2>{card.title}</h2>
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  background: #f3f4f6;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background: #3b82f6;
  color: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
