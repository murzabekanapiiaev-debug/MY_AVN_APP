import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = login(userName, password);

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "manager") {
      navigate("/manager");
    } else if (role === "user") {
      navigate("/lms");
    } else {
      setError("Логин же пароль туура эмес!");
    }
  };

  return (
    <Wrapper>
      <LoginCard>
        <Title>Авторизация</Title>

        <Input
          type="text"
          placeholder="Пользователь"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setError("");
          }}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <SubmitButton onClick={handleLogin}>Войти</SubmitButton>

        <Hint>
          <p>👤 user / 1234 — Студент</p>
          <p>🔧 manager / 1234 — Менеджер</p>
          <p>⚙️ admin / 1234 — Администратор</p>
        </Hint>
      </LoginCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #2c3e50;
  font-family: sans-serif;
`;

const LoginCard = styled.div`
  background: #34495e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin: 0 0 10px 0;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #4f6f8f;
  border-radius: 5px;
  font-size: 15px;
  background-color: #2c3e50;
  color: #ffffff;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
  }

  &::placeholder {
    color: #95a5a6;
  }
`;

const ErrorText = styled.p`
  color: #e74c3c;
  font-size: 13px;
  text-align: center;
  margin: 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #3498db;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2980b9;
  }
`;

const Hint = styled.div`
  border-top: 1px solid #4f6f8f;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-size: 12px;
    color: #95a5a6;
    margin: 0;
  }
`;
