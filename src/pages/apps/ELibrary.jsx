import { useState } from "react";
import styled from "styled-components";

export const ELibrary = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Wrapper>
      <Card>
        <FilterGroup>
          <Label>Категория</Label>
          <Select>
            <option>---</option>
            <option>Учебники</option>
            <option>Методические пособия</option>
            <option>Монографии</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Подкатегория</Label>
          <Select>
            <option value=""></option>
            <option>Информатика</option>
            <option>Математика</option>
            <option>Физика</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Поиск</Label>
          <Select>
            <option>По названию</option>
            <option>По автору</option>
            <option>По ключевому слову</option>
          </Select>
        </FilterGroup>

        <SearchRow>
          <SearchInput
            type="text"
            placeholder="Введите текст для поиска"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchBtn>Искать</SearchBtn>
        </SearchRow>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.span`
  font-size: 13px;
  color: #555;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-bottom: 1px solid #dce3ed;
  font-size: 14px;
  color: #333;
  background: white;
  outline: none;
  cursor: pointer;

  &:focus {
    border-bottom-color: #1565c0;
  }
`;

const SearchRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #dce3ed;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #1565c0;
  }
`;

const SearchBtn = styled.button`
  padding: 10px 20px;
  background: #1565c0;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #1976d2;
  }
`;
