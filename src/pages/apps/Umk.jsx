import styled from "styled-components";

export const Umk = () => {
  return (
    <Wrapper>
      <FilterCard>
        <FilterGroup>
          <Label>Семестр</Label>
          <Select>
            <option value="">---</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Дисциплина</Label>
          <Select>
            <option value=""></option>
            <option>WEB технологии</option>
            <option>Базы данных</option>
            <option>Операционные системы</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Форма контроля</Label>
          <Select>
            <option value=""></option>
            <option>Экзамен</option>
            <option>Зачет</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Преподаватель</Label>
          <Select>
            <option value=""></option>
            <option>Мукамбетова С.А.</option>
            <option>Жангазиева Г.А.</option>
            <option>Жунусова Ч.С.</option>
          </Select>
        </FilterGroup>
      </FilterCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterCard = styled.div`
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
  appearance: auto;

  &:focus {
    border-bottom-color: #1565c0;
  }
`;
