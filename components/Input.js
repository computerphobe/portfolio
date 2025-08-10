"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Input.module.css";

export default function Input({ command, onSubmit }) {
  const [_command, setCommand] = useState(command ? command : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="command" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ 
          color: "var(--accent)", 
          fontSize: '16px',
          textShadow: '0 0 10px var(--accent)'
        }}>◉</span>
        <span style={{ 
          color: "var(--primary)",
          textShadow: '0 0 8px var(--primary)'
        }}>portfolio</span>
        <span style={{ color: "var(--text-color)" }}>@</span>
        <span style={{ 
          color: "var(--secondary)",
          textShadow: '0 0 8px var(--secondary)'
        }}>terminal</span>
        <span style={{ color: "var(--text-color)" }}>:~$</span>
      </label>

      <input
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={command ? true : false}
        ref={(input) => input && !command && input.focus()}
        autoFocus={command === ""}
      />
    </form>
  );
}
