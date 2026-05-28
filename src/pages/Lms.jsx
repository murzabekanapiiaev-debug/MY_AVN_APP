import styled from "styled-components";
import { Outlet } from "react-router-dom"; // Киргизилди
import { LeftSidebar } from "../components/lms/LeftSidebar";
import { RightSidebar } from "../components/lms/RightSidebar";

export const Lms = () => {
  return (
    <PageWrapper>
      <LeftSidebar />
      <MainContent>
        {/* Басылган роутка карап, бул жерге же Schedule, же Registration келип түшөт */}
        <Outlet />
      </MainContent>
      {/* Эгер RightSidebar'дын ичинде activeApp керек болсо, азырынча калтырдык */}
      <RightSidebar />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  min-height: calc(100vh - 60px);
`;

const MainContent = styled.main`
  background: #ffffff;
`;
  