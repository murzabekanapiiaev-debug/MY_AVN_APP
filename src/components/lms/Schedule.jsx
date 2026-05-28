import { useState } from "react";
import styled from "styled-components";

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Все"];

const schedule = {
  Чт: [
    {
      time: "10:00-11:20",
      type: "Лк.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/105)",
    },
    {
      time: "11:30-12:50",
      type: "Лб.",
      subject: "Базы данных",
      teacher: "Жангазиева Г.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "13:00-14:20",
      type: "Лб.",
      subject: "Операционные системы",
      teacher: "Жунусова Ч.С.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "15:00-16:20",
      type: "Лб.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    { time: "16:30-17:50", type: "", subject: "", teacher: "", room: "" },
    { time: "18:00-19:20", type: "", subject: "", teacher: "", room: "" },
    { time: "19:30-20:50", type: "", subject: "", teacher: "", room: "" },
    { time: "21:00-22:00", type: "", subject: "", teacher: "", room: "" },
  ],
  Пн: [
    {
      time: "10:00-11:20",
      type: "Лк.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/105)",
    },
    {
      time: "11:30-12:50",
      type: "Лб.",
      subject: "Базы данных",
      teacher: "Жангазиева Г.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "13:00-14:20",
      type: "Лб.",
      subject: "Операционные системы",
      teacher: "Жунусова Ч.С.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "15:00-16:20",
      type: "Лб.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    { time: "16:30-17:50", type: "", subject: "", teacher: "", room: "" },
    { time: "18:00-19:20", type: "", subject: "", teacher: "", room: "" },
    { time: "19:30-20:50", type: "", subject: "", teacher: "", room: "" },
    { time: "21:00-22:00", type: "", subject: "", teacher: "", room: "" },
  ],
  Вт: [
    {
      time: "10:00-11:20",
      type: "Лк.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/105)",
    },
    {
      time: "11:30-12:50",
      type: "Лб.",
      subject: "Базы данных",
      teacher: "Жангазиева Г.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "13:00-14:20",
      type: "Лб.",
      subject: "Операционные системы",
      teacher: "Жунусова Ч.С.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "15:00-16:20",
      type: "Лб.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    { time: "16:30-17:50", type: "", subject: "", teacher: "", room: "" },
    { time: "18:00-19:20", type: "", subject: "", teacher: "", room: "" },
    { time: "19:30-20:50", type: "", subject: "", teacher: "", room: "" },
    { time: "21:00-22:00", type: "", subject: "", teacher: "", room: "" },
  ],
  Ср: [
    {
      time: "10:00-11:20",
      type: "Лк.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/105)",
    },
    {
      time: "11:30-12:50",
      type: "Лб.",
      subject: "Базы данных",
      teacher: "Жангазиева Г.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "13:00-14:20",
      type: "Лб.",
      subject: "Операционные системы",
      teacher: "Жунусова Ч.С.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "15:00-16:20",
      type: "Лб.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    { time: "16:30-17:50", type: "", subject: "", teacher: "", room: "" },
    { time: "18:00-19:20", type: "", subject: "", teacher: "", room: "" },
    { time: "19:30-20:50", type: "", subject: "", teacher: "", room: "" },
    { time: "21:00-22:00", type: "", subject: "", teacher: "", room: "" },
  ],
  Пт: [
    {
      time: "10:00-11:20",
      type: "Лк.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/105)",
    },
    {
      time: "11:30-12:50",
      type: "Лб.",
      subject: "Базы данных",
      teacher: "Жангазиева Г.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "13:00-14:20",
      type: "Лб.",
      subject: "Операционные системы",
      teacher: "Жунусова Ч.С.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "15:00-16:20",
      type: "Лб.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    { time: "16:30-17:50", type: "", subject: "", teacher: "", room: "" },
    { time: "18:00-19:20", type: "", subject: "", teacher: "", room: "" },
    { time: "19:30-20:50", type: "", subject: "", teacher: "", room: "" },
    { time: "21:00-22:00", type: "", subject: "", teacher: "", room: "" },
  ],
  Сб: [
    {
      time: "10:00-11:20",
      type: "Лк.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/105)",
    },
    {
      time: "11:30-12:50",
      type: "Лб.",
      subject: "Базы данных",
      teacher: "Жангазиева Г.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "13:00-14:20",
      type: "Лб.",
      subject: "Операционные системы",
      teacher: "Жунусова Ч.С.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    {
      time: "15:00-16:20",
      type: "Лб.",
      subject: "Структурное программирование",
      teacher: "Мукамбетова С.А.",
      room: "1-16 (8-корпус, ауд.8/306)",
    },
    { time: "16:30-17:50", type: "", subject: "", teacher: "", room: "" },
    { time: "18:00-19:20", type: "", subject: "", teacher: "", room: "" },
    { time: "19:30-20:50", type: "", subject: "", teacher: "", room: "" },
    { time: "21:00-22:00", type: "", subject: "", teacher: "", room: "" },
  ],
};

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState("Чт");

  const currentSchedule =
    activeDay === "Все"
      ? Object.entries(schedule).flatMap(([day, items]) =>
          items.map((item) => ({ ...item, day })),
        )
      : schedule[activeDay] || [];

  return (
    <Wrapper>
      <TopBar>
        <FilterGroup>
          <Label>Учебный год</Label>
          <Select>
            <option>2025-26</option>
            <option>2024-25</option>
          </Select>
        </FilterGroup>
        <FilterGroup>
          <Label>Полугодие</Label>
          <Select>
            <option>Осенний семестр</option>
            <option>Весенний семестр</option>
          </Select>
        </FilterGroup>
        <RefreshBtn>↻ Обновить</RefreshBtn>
      </TopBar>

      <DayTabs>
        {days.map((day) => (
          <DayBtn
            key={day}
            active={activeDay === day}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </DayBtn>
        ))}
      </DayTabs>

      <ScheduleBox>
        <DayTitle>{activeDay}</DayTitle>
        {currentSchedule.map((item, i) => (
          <Row key={i} hasContent={!!item.subject}>
            <Time hasContent={!!item.subject}>{item.time}</Time>
            {item.subject && (
              <LessonInfo>
                <Icon>⊞</Icon>
                <LessonText>
                  <strong>{item.type}</strong> {item.subject} {item.teacher}{" "}
                  <Bold>{item.room}</Bold>
                </LessonText>
              </LessonInfo>
            )}
          </Row>
        ))}
      </ScheduleBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.span`
  font-size: 12px;
  color: #666;
`;

const Select = styled.select`
  padding: 7px 10px;
  border: 1px solid #dce3ed;
  border-radius: 6px;
  font-size: 13px;
  color: #333;
  outline: none;
  cursor: pointer;
  min-width: 160px;
`;

const RefreshBtn = styled.button`
  padding: 7px 16px;
  background: #1565c0;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background: #1976d2;
  }
`;

const DayTabs = styled.div`
  display: flex;
  gap: 6px;
`;

const DayBtn = styled.button`
  padding: 7px 14px;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.active ? "#e65100" : "#dce3ed")};
  background: white;
  color: ${(props) => (props.active ? "#e65100" : "#333")};
  font-size: 13px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;

  &:hover {
    border-color: #e65100;
    color: #e65100;
  }
`;

const ScheduleBox = styled.div`
  border: 1px solid #dce3ed;
  border-radius: 8px;
  padding: 16px;
`;

const DayTitle = styled.h3`
  color: #e65100;
  font-size: 18px;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 8px 0;
  border-bottom: ${(props) =>
    props.hasContent ? "1px solid #f0f4f8" : "none"};
  min-height: 36px;
`;

const Time = styled.span`
  font-size: 13px;
  color: ${(props) => (props.hasContent ? "#1565c0" : "#aaa")};
  min-width: 90px;
  font-weight: ${(props) => (props.hasContent ? "500" : "400")};
`;

const LessonInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
`;

const Icon = styled.span`
  color: #1565c0;
  font-size: 16px;
  margin-top: 1px;
`;

const LessonText = styled.span`
  font-size: 13px;
  color: #333;
  line-height: 1.5;
`;

const Bold = styled.span`
  font-weight: 600;
`;
