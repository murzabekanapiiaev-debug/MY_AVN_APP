import { useState } from "react";
import styled from "styled-components";

export const LeftSidebar = () => {
  const [openYear, setOpenYear] = useState(false);
  const [openSemester, setOpenSemester] = useState(false);
  const [openDisciplines, setOpenDisciplines] = useState(true);
  const [activeSemester, setActiveSemester] = useState("Весенний семестр");
  const [openProfile, setOpenProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const semesters = ["Осенний семестр", "Весенний семестр", "Летний семестр"];
  const disciplines = [
    "WEB технологии [0]",
    "WEB технологии [5]",
    "Базы данных [5]",
    "Операционные системы [5]",
  ];

  return (
    <Wrapper>
      <UserCard onClick={() => setOpenProfile(!openProfile)}>
        <Avatar>А</Avatar>
        <UserInfo>
          <UserName>Анапияев М. И.</UserName>
          <UserGroup>Пин(б)-3-24</UserGroup>
        </UserInfo>
        <Arrow>{openProfile ? "▲" : "▼"}</Arrow>
      </UserCard>

      {openProfile && (
        <ProfileDropdown>
          <ProfileHeader>
            <ProfileAvatar>А</ProfileAvatar>
            <ProfileInfo>
              <ProfileName>Анапияев Мурзабек Исамидинович</ProfileName>
              <ProfileGroup>Пин(б)-3-24</ProfileGroup>
            </ProfileInfo>
          </ProfileHeader>

          <Divider />

          <MenuItem>
            <MenuIcon>🔑</MenuIcon>
            <span>Изменить пароль</span>
          </MenuItem>

          <MenuItem>
            <MenuIcon>🌙</MenuIcon>
            <span>Темный режим</span>
            <Toggle
              active={darkMode}
              onClick={(e) => {
                e.stopPropagation();
                setDarkMode(!darkMode);
              }}
            >
              <ToggleCircle active={darkMode} />
            </Toggle>
          </MenuItem>

          <MenuItem>
            <MenuIcon>🌐</MenuIcon>
            <LangGroup>
              <LangBtn active>Кыр</LangBtn>
              <LangBtn>Рус</LangBtn>
              <LangBtn>Eng</LangBtn>
            </LangGroup>
          </MenuItem>

          <MenuItem red>
            <MenuIcon>🚪</MenuIcon>
            <span>Выйти</span>
          </MenuItem>

          <Version>© AVN &nbsp; 25-03-28 09:59:26 v0.0.1</Version>
        </ProfileDropdown>
      )}

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

const ProfileDropdown = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #dce3ed;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
`;

const ProfileAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #1565c0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ProfileName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;

const ProfileGroup = styled.span`
  font-size: 11px;
  color: #888;
`;

const Divider = styled.div`
  height: 1px;
  background: #f0f4f8;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  font-size: 13px;
  color: ${(props) => (props.red ? "#e53935" : "#333")};
  cursor: pointer;

  &:hover {
    background: #f5f7fa;
  }
`;

const MenuIcon = styled.span`
  font-size: 16px;
`;

const Toggle = styled.div`
  margin-left: auto;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${(props) => (props.active ? "#1565c0" : "#ccc")};
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: background 0.2s;
`;

const ToggleCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  transform: ${(props) =>
    props.active ? "translateX(16px)" : "translateX(0)"};
  transition: transform 0.2s;
`;

const LangGroup = styled.div`
  display: flex;
  gap: 6px;
`;

const LangBtn = styled.button`
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid #dce3ed;
  background: ${(props) => (props.active ? "#1565c0" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  font-size: 12px;
  cursor: pointer;
`;

const Version = styled.div`
  text-align: center;
  font-size: 10px;
  color: #aaa;
  padding: 8px;
  border-top: 1px solid #f0f4f8;
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
