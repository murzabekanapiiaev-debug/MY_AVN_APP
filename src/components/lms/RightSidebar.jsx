import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Киргизилди
import styled from "styled-components";

// Ар бир менюга "path" коштук
const apps = [
  { title: "Расписание занятий", icon: "🖥️", path: "/lms/schedule" },
  { title: "Новостная лента", icon: "📰", path: "/lms/news" },
  { title: "Журнал", icon: "📓", path: "/lms/journal" },
  { title: "УМК", icon: "📘", path: "/lms/umk" },
  { title: "е-Библиотека", icon: "📚", path: "/lms/library" },
  { title: "Тестирование", icon: "📝", path: "/lms/testing" },
  { title: "Анкетирование", icon: "📋", path: "/lms/survey" },
  { title: "Личная карточка", icon: "👤", path: "/personalCard" },
  { title: "Регистрация на дисциплины", icon: "📌", path: "/lms/registration" },
  { title: "Шифр оплаты", icon: "💳", path: "/lms/payment" },
];

// props'тордон activeApp менен onSelect'ти алып салсак болот
export const RightSidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate(); // Баракчаларды алмаштыруу үчүн
  const location = useLocation(); // Учурдагы даректи билүү үчүн

  return (
    <Wrapper>
      <Header onClick={() => setOpen(!open)}>
        <HeaderLeft>
          <HeaderIcon>📡</HeaderIcon>
          <span>Приложения</span>
        </HeaderLeft>
        <Arrow>{open ? "▲" : "▼"}</Arrow>
      </Header>

      {open && (
        <AppList>
          {apps.map((app) => {
            // Браузердин учурдагы дареги (location.pathname) ушул app.path'ке барабарбы деп текшеребиз
            const isActive = location.pathname === app.path;

            return (
              <AppItem
                key={app.title}
                active={isActive} // Жаңы активдүүлүк логикасы
                onClick={() => navigate(app.path)} // Түз эле керектүү дарекке өтөт
              >
                <AppIcon>{app.icon}</AppIcon>
                <AppTitle active={isActive}>{app.title}</AppTitle>
              </AppItem>
            );
          })}
        </AppList>
      )}
    </Wrapper>
  );
};

// Сенин калган styled-components стилдериң өзгөрүүсүз калат...
const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Header = styled.div`
  background: #1565c0;
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  cursor: pointer;

  &:hover {
    background: #1976d2;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const HeaderIcon = styled.span`
  font-size: 18px;
`;

const Arrow = styled.span`
  font-size: 11px;
  opacity: 0.8;
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const AppItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#e3eaf3" : "transparent")};

  &:hover {
    background: #e3eaf3;
  }
`;

const AppIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #e3eaf3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
`;

const AppTitle = styled.span`
  font-size: 13px;
  color: ${(props) => (props.active ? "#1565c0" : "#333")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
`;
