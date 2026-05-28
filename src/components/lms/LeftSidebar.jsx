import { useState } from "react";
import styled from "styled-components";

export const LeftSidebar = () => {
  const [openYear, setOpenYear] = useState(false);
  const [openSemester, setOpenSemester] = useState(false);
  const [openDisciplines, setOpenDisciplines] = useState(true);
  const [activeSemester, setActiveSemester] = useState("Весенний семестр");

  const semesters = ["Осенний семестр", "Весенний семестр", "Летний семестр"];

  const disciplines = [
    "WEB технологии [0]",
    "WEB технологии [5]",
    "Базы данных [5]",
    "Операционные системы [5]",
  ];

  return (
    <Wrapper>
      <UserCard>
        <Avatar>А</Avatar>
        <UserInfo>
          <UserName>Анапияев М. И.</UserName>
          <UserGroup>Пин(б)-3-24</UserGroup>
        </UserInfo>
        <Arrow>▼</Arrow>
      </UserCard>

      <DropdownItem onClick={() => setOpenYear(!openYear)}>
        <span>🎓 2025-26</span>
        <Arrow>{openYear ? "▲" : "▼"}</Arrow>
      </DropdownItem>

      {openYear && (
        <SubList>
          {semesters.map((s) => (
            <SemesterItem
              key={s}
              active={activeSemester === s}
              onClick={() => {
                setActiveSemester(s);
                setOpenYear(false);
              }}
            >
              {s}
            </SemesterItem>
          ))}
        </SubList>
      )}

      <DropdownItem onClick={() => setOpenSemester(!openSemester)}>
        <span>🍃 {activeSemester}</span>
        <Arrow>{openSemester ? "▲" : "▼"}</Arrow>
      </DropdownItem>

      {openSemester && (
        <SubList>
          {semesters.map((s) => (
            <SemesterItem
              key={s}
              active={activeSemester === s}
              onClick={() => {
                setActiveSemester(s);
                setOpenSemester(false);
              }}
            >
              {s}
            </SemesterItem>
          ))}
        </SubList>
      )}

      <DropdownItem onClick={() => setOpenDisciplines(!openDisciplines)}>
        <span>📚 Дисциплины</span>
        <Arrow>{openDisciplines ? "▲" : "▼"}</Arrow>
      </DropdownItem>

      {openDisciplines && (
        <SubList>
          {disciplines.map((d) => (
            <DisciplineItem key={d}>📖 {d}</DisciplineItem>
          ))}
        </SubList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const UserCard = styled.div`
  background: #1565c0;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const UserName = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const UserGroup = styled.span`
  font-size: 11px;
  opacity: 0.8;
`;

const Arrow = styled.span`
  font-size: 11px;
  opacity: 0.8;
  color: white;
`;

const DropdownItem = styled.div`
  background: #1565c0;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #1976d2;
  }
`;

const SubList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 8px;
`;

const SemesterItem = styled.div`
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  background: ${(props) => (props.active ? "#e3eaf3" : "transparent")};
  color: ${(props) => (props.active ? "#1565c0" : "#333")};
  font-weight: ${(props) => (props.active ? "600" : "400")};

  &:hover {
    background: #e3eaf3;
  }
`;

const DisciplineItem = styled.div`
  padding: 8px 12px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: #e3eaf3;
  }
`;
