import React from "react";

export const RegistrationDisipline = () => {
  return (
    <div
      style={{
        background: "#e9edf3",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Ортодогу бөлүк */}
      <div
        style={{
          width: "700px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Учебный год
          </label>

          <select
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          >
            <option>2025-26</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Полугодие
          </label>

          <select
            style={{
              width: "320px",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          >
            <option>Весенний семестр</option>
            <option>Осенний семестр</option>
          </select>
        </div>
      </div>
    </div>
  );
};
