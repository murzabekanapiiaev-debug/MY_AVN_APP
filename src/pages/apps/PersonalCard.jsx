import React from "react";
import styled from "styled-components";

export const PersonalCard = () => {
  return (
    <Container>
      <Main>
        <AboutData>
          <AvatarPlaceholder>М</AvatarPlaceholder>
          <div className="me">
            <h4>Анапияев Мурзабек Исамидинович</h4>
            <p>ИИТ гр. ПИн(б)-3-24</p>
            <p>24\154205</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <p>2025-26 - учебный год</p>
              <p>Весенний семестр</p>
            </div>
          </div>
        </AboutData>

        <InformatiosMoney>
          <p>Контракт: 102300 сом</p>
          <p>Оплатил: 102350 сом</p>
          <p>Долг: Переплата -50 сом</p>
          <p>Допуск: допуск</p>
          <p>
            Разработка программно-информационных систем (очная бакалавр) (ИИТ)
          </p>
        </InformatiosMoney>
      </Main>

      <Cards>
        <div className="card-one">
          <h1>Успеваемость</h1>
          <p>Электроника</p>
          <p>Базы данных</p>
          <p>Кыргыз тили</p>
          <p>Русский</p>
          <p>Информатика</p>
          <p>География</p>
          <p>Денетарбия</p>
          <p>Тарых</p>
          <button className="btn">Подробнее...</button>
        </div>
        <div className="card-two">
          <h1>Приказы</h1>
          <h3>Прибытие</h3>
          <p>Перевод по курсу</p>
          <p>№4у/101 21.07.2025 г.</p>
          <p>2025-26-учебный год</p>
          <p>2-курс</p>
          <p>
            Разработка программно-информационных систем (очная бакалавр) (ИИТ)
          </p>
          <button className="btn">Подробнее...</button>
        </div>
        <div className="card-three">
          <h1>Оплаты</h1>
          <h3>Приход</h3>
          <p>Плата за обучение , 2025-26-учебный год</p>
          <p>24860 сом, по терминалу (банк)</p>
          <p>№668277, 19.05.2026 г.</p>
          <button className="btn">Подробнее...</button>
        </div>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid;
  border-radius: 60px;
  max-width: 1336px;
  width: 100%;
  max-height: 170px;
  margin-right: 20px;
  padding-bottom: 40px;
`;

const AboutData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 200px;
  border-radius: 40px;
  text-align: center;

  .me {
    display: flex;
    flex-direction: column;

    p {
      text-align: start;
    }
  }
`;

const AvatarPlaceholder = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: #1565c0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 600;
  flex-shrink: 0;
`;

const InformatiosMoney = styled.div`
  width: auto;
  height: 170px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  max-width: 1399px;
  width: 100%;
  height: 400px;
  margin-top: 20px;

  h1 {
    text-align: center;
    color: orange;
  }
  h3 {
    margin-left: 20px;
    color: blue;
  }
  p {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 20px;
    margin-right: 10px;
  }

  .card-one,
  .card-two,
  .card-three {
    cursor: pointer;
    border-radius: 30px;
    border: 2px solid;
    width: 264px;
    height: 406px;

    p {
      border-bottom: 1px solid;
    }

    &:hover {
      background: #edeaea;
    }
  }

  .btn {
    cursor: pointer;
    margin-left: 150px;
    background: none;
    border: none;
    border-bottom: 1px solid;

    &:hover {
      color: blue;
    }
  }
`;
