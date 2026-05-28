import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const MainLayout = () => {
  return (
    <div>
      <Header>
        <Logo>
          <LogoA>A</LogoA>
          <LogoV>V</LogoV>
          <LogoN>N</LogoN>
        </Logo>
        <HeaderTitle>ОБРАЗОВАТЕЛЬНЫЙ ПОРТАЛ КГТУ</HeaderTitle>
        <HeaderRight>
          <span>Учебный</span>
          <Avatar>М</Avatar>
        </HeaderRight>
      </Header>

      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

const Header = styled.header`
  background: #1565c0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const Logo = styled.div`
  background: white;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const LogoA = styled.span`
  color: #e53935;
`;
const LogoV = styled.span`
  color: #1565c0;
`;
const LogoN = styled.span`
  color: #43a047;
`;

const HeaderTitle = styled.h1`
  color: white;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 14px;
`;

const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
`;

const MainContent = styled.main`
  background: #f0f4f8;
  min-height: calc(100vh - 60px);
  padding: 28px 24px;
`;
