import styled from "styled-components";

const services = [
  { code: "101", title: "Плата за обучение" },
  { code: "102", title: "Плата за летний семестр" },
  { code: "103", title: "Плата за общежитие" },
  {
    code: "104",
    title: "Плата за зачетно- экз.ведомость( академическая разница)",
  },
  { code: "105", title: "Оплата за корочку диплома" },
  { code: "106", title: "Оплата за прием документов" },
  { code: "107", title: "Оплата за перевод или восстановление" },
];

export const ShifrOplaty = () => {
  return (
    <Wrapper>
      <Card>
        <SectionTitle>Виды услуг</SectionTitle>
        <ServiceList>
          {services.map((s) => (
            <ServiceItem key={s.code}>
              <Code>{s.code}</Code>
              <Link href="#">{s.title}</Link>
            </ServiceItem>
          ))}
        </ServiceList>
      </Card>

      <Card>
        <FilterGroup>
          <Label>Учебный год</Label>
          <Select>
            <option>2025-26</option>
            <option>2024-25</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Группа</Label>
          <Select>
            <option>-</option>
            <option>ПИн(б)-3-24</option>
            <option>ПИн(б)-2-24</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>За услугу</Label>
          <Select>
            <option>-</option>
            {services.map((s) => (
              <option key={s.code}>
                {s.code} - {s.title}
              </option>
            ))}
          </Select>
        </FilterGroup>
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

const SectionTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Code = styled.span`
  font-size: 13px;
  color: #555;
  min-width: 30px;
`;

const Link = styled.a`
  font-size: 13px;
  color: #1565c0;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #0d47a1;
  }
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
