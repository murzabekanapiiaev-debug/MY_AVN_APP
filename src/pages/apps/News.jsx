import { useState } from "react";
import styled from "styled-components";

const newsData = [
  {
    id: 1,
    title: "Расписание экзаменов весеннего семестра 2025-26",
    date: "20.05.2026",
    category: "Учеба",
    text: "Уважаемые студенты! Опубликовано расписание экзаменов весеннего семестра. Просьба ознакомиться заранее.",
  },
  {
    id: 2,
    title: "Обновление системы AVN LMS",
    date: "15.05.2026",
    category: "Система",
    text: "Проведено обновление образовательного портала. Добавлены новые функции и исправлены ошибки.",
  },
  {
    id: 3,
    title: "Deadline сдачи лабораторных работ",
    date: "10.05.2026",
    category: "Учеба",
    text: "Напоминаем, что deadline сдачи лабораторных работ по всем дисциплинам — 30 мая 2026 года.",
  },
  {
    id: 4,
    title: "Студенческая конференция КГТУ 2026",
    date: "05.05.2026",
    category: "Мероприятие",
    text: "Приглашаем студентов принять участие в ежегодной научной конференции КГТУ. Заявки принимаются до 25 мая.",
  },
  {
    id: 5,
    title: "Изменение графика работы деканата",
    date: "01.05.2026",
    category: "Объявление",
    text: "В связи с праздничными днями деканат будет работать по сокращенному графику с 1 по 5 мая.",
  },
];

const categoryColors = {
  Учеба: "#1565c0",
  Система: "#43a047",
  Мероприятие: "#e65100",
  Объявление: "#6a1b9a",
};

export const News = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Wrapper>
      <PageTitle>Новостная лента</PageTitle>

      {selected ? (
        <DetailCard>
          <BackBtn onClick={() => setSelected(null)}>← Назад</BackBtn>
          <DetailCategory color={categoryColors[selected.category]}>
            {selected.category}
          </DetailCategory>
          <DetailTitle>{selected.title}</DetailTitle>
          <DetailDate>{selected.date}</DetailDate>
          <DetailText>{selected.text}</DetailText>
        </DetailCard>
      ) : (
        <NewsList>
          {newsData.map((news) => (
            <NewsCard key={news.id} onClick={() => setSelected(news)}>
              <NewsTop>
                <Category color={categoryColors[news.category]}>
                  {news.category}
                </Category>
                <Date>{news.date}</Date>
              </NewsTop>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsText>{news.text}</NewsText>
              <ReadMore>Подробнее →</ReadMore>
            </NewsCard>
          ))}
        </NewsList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PageTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a237e;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NewsCard = styled.div`
  background: white;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 4px 16px rgba(21, 101, 192, 0.1);
    border-color: #90caf9;
  }
`;

const NewsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Category = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: white;
  background: ${(props) => props.color || "#1565c0"};
  padding: 3px 10px;
  border-radius: 20px;
`;

const Date = styled.span`
  font-size: 12px;
  color: #888;
`;

const NewsTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1a237e;
  margin-bottom: 6px;
`;

const NewsText = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMore = styled.span`
  font-size: 12px;
  color: #1565c0;
  font-weight: 500;
`;

const DetailCard = styled.div`
  background: white;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BackBtn = styled.button`
  background: transparent;
  border: none;
  color: #1565c0;
  font-size: 13px;
  cursor: pointer;
  align-self: flex-start;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailCategory = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: white;
  background: ${(props) => props.color || "#1565c0"};
  padding: 3px 10px;
  border-radius: 20px;
  align-self: flex-start;
`;

const DetailTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a237e;
`;

const DetailDate = styled.span`
  font-size: 12px;
  color: #888;
`;

const DetailText = styled.p`
  font-size: 14px;
  color: #444;
  line-height: 1.7;
`;
