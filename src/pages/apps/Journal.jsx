import styled from "styled-components";

export const Journal = () => {
  return (
    <Wrapper>
      <FilterCard>
        <FilterGrid>
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
              <option>Весенний семестр</option>
              <option>Осенний семестр</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Семестр</Label>
            <Select>
              <option value="">Семестр</option>
              <option>1</option>
              <option>2</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Дисциплина</Label>
            <Select>
              <option value="">Дисциплина</option>
              <option>WEB технологии</option>
              <option>Базы данных</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Вид занятия</Label>
            <Select>
              <option value="">Вид занятия</option>
              <option>Лекция</option>
              <option>Лабораторная</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Преподаватель</Label>
            <Select>
              <option value="">Преподаватель</option>
              <option>Мукамбетова С.А.</option>
              <option>Жангазиева Г.А.</option>
            </Select>
          </FilterGroup>
        </FilterGrid>
      </FilterCard>

      <ResultCard>
        <Legend>
          <Total>
            <strong>Всего: 0 н/б</strong>
          </Total>
          <LegendItem>
            <Dot color="#f44336" /> - Пропуск занятий
          </LegendItem>
          <LegendItem>
            <Dot color="#4caf50" /> - Допуск
          </LegendItem>
          <LegendItem>
            <Dot color="#2196f3" /> - Отработка
          </LegendItem>
        </Legend>

        <Table>
          <TableHead>
            <tr>
              <Th>№</Th>
              <Th>Дата</Th>
              <Th>Время урока</Th>
              <Th>Оценка</Th>
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <Td
                colSpan={4}
                style={{ textAlign: "center", color: "#999", padding: "24px" }}
              >
                Нет данных
              </Td>
            </tr>
          </tbody>
        </Table>
      </ResultCard>
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
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #dce3ed;
  border-radius: 6px;
  font-size: 13px;
  color: #333;
  background: white;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #1565c0;
  }
`;

const ResultCard = styled.div`
  background: white;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  padding: 20px;
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const Total = styled.span`
  font-size: 14px;
  color: #333;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #333;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid #dce3ed;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px 12px;
  font-size: 13px;
  color: #1565c0;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 10px 12px;
  font-size: 13px;
  color: #333;
  border-bottom: 1px solid #f0f4f8;
`;
