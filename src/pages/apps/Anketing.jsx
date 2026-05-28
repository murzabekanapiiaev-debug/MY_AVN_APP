import { useState } from "react";
import styled from "styled-components";

const questions = [
  {
    id: 1,
    question: "Сабактардын сапатын кандай баалайсыз?",
    options: ["Өтө жакшы", "Жакшы", "Орточо", "Начар"],
  },
  {
    id: 2,
    question: "Окутуучулардын даярдыгын кандай баалайсыз?",
    options: ["Өтө жакшы", "Жакшы", "Орточо", "Начар"],
  },
  {
    id: 3,
    question: "Портал колдонуу ыңгайлуулугун баалаңыз?",
    options: ["Өтө ыңгайлуу", "Ыңгайлуу", "Орточо", "Ыңгайсыз"],
  },
  {
    id: 4,
    question: "Окуу материалдарынын жетиштүүлүгүн баалаңыз?",
    options: ["Жетиштүү", "Жетишерлик", "Аз", "Абдан аз"],
  },
  {
    id: 5,
    question: "Жалпы окуу процессин кандай баалайсыз?",
    options: ["Өтө жакшы", "Жакшы", "Орточо", "Начар"],
  },
];

export const Anketing = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Бардык суроолорго жооп бериңиз!");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Wrapper>
        <SuccessCard>
          <SuccessIcon>✅</SuccessIcon>
          <SuccessTitle>Анкета жиберилди!</SuccessTitle>
          <SuccessText>Катышуунуз үчүн рахмат.</SuccessText>
        </SuccessCard>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PageTitle>Анкетирование</PageTitle>
      <SubTitle>Сураныч, бардык суроолорго жооп бериңиз</SubTitle>

      <QuestionList>
        {questions.map((q, index) => (
          <QuestionCard key={q.id}>
            <QuestionText>
              {index + 1}. {q.question}
            </QuestionText>
            <OptionList>
              {q.options.map((option) => (
                <OptionItem
                  key={option}
                  active={answers[q.id] === option}
                  onClick={() => handleSelect(q.id, option)}
                >
                  <Radio active={answers[q.id] === option} />
                  {option}
                </OptionItem>
              ))}
            </OptionList>
          </QuestionCard>
        ))}
      </QuestionList>

      <Progress>
        Жооп берилди: {Object.keys(answers).length} / {questions.length}
      </Progress>

      <SubmitBtn onClick={handleSubmit}>Жиберүү</SubmitBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PageTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a237e;
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: #888;
  margin-top: -8px;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const QuestionCard = styled.div`
  background: white;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  padding: 16px;
`;

const QuestionText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#e3f2fd" : "transparent")};
  color: ${(props) => (props.active ? "#1565c0" : "#444")};
  font-weight: ${(props) => (props.active ? "600" : "400")};

  &:hover {
    background: #f0f4f8;
  }
`;

const Radio = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.active ? "#1565c0" : "#ccc")};
  background: ${(props) => (props.active ? "#1565c0" : "white")};
  flex-shrink: 0;
  transition: all 0.15s;
`;

const Progress = styled.p`
  font-size: 13px;
  color: #888;
  text-align: right;
`;

const SubmitBtn = styled.button`
  padding: 12px;
  background: #1565c0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  max-width: 200px;

  &:hover {
    background: #1976d2;
  }
`;

const SuccessCard = styled.div`
  background: white;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const SuccessIcon = styled.div`
  font-size: 48px;
`;

const SuccessTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a237e;
`;

const SuccessText = styled.p`
  font-size: 14px;
  color: #888;
`;
