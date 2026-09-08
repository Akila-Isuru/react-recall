import React, { type ReactNode } from "react";

type AlertProps = {
  type: "success" | "error";
  children: ReactNode;
};

function AlertBox({ type, children }: AlertProps) {
  const borderColor = type === "success" ? "green" : "red";
  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        padding: "12px",
        borderRadius: "6px",
        marginBottom: "8px",
      }}
    >
      {children}
    </div>
  );
}

function QuickExercise() {
  return (
    <div>
      <AlertBox type="success">
        <p>Data saved successfully!</p>
      </AlertBox>

      <AlertBox type="error">
        <p>Failed to connect to backend!</p>
      </AlertBox>
    </div>
  );
}

export default QuickExercise;
