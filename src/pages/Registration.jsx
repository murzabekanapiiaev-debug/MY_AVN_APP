import { useState } from "react";
import styled from "styled-components";
import { LeftSidebar } from "../components/lms/LeftSidebar";
import { RightSidebar } from "../components/lms/RightSidebar";

export const Registration = () => {
  const [semester, setSemester] = useState("");

  return (
    <PageWrapper>
      <LeftSidebar />

      <MainContent>
        <FilterGroup>
          <Label>Учебный год</Label>
          <Select>
            <option>2025-26</option>
            <option>2024-25</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Полугодие</Label>
          <Select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">— выберите —</option>
            <option>Осенний семестр</option>
            <option>Весенний семестр</option>
            <option>Летний-зимний-семестры</option>
          </Select>
        </FilterGroup>
      </MainContent>

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
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 640px;
`;

const Label = styled.span`
  font-size: 13px;
  color: #555;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #dce3ed;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #1565c0;
  }
`;
