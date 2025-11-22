import React, { useState } from "react";
import "./login.css";
import { useShoppingCartContext } from "../context/shopcontext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {Handellogin} = useShoppingCartContext()
  const navigate = useNavigate()
  const CORRECT_PASSWORD = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      setError("");
      Handellogin();
      navigate("/projectpage")
    } else {
      setError("رمز عبور اشتباه است ❌");
    }
  };


  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="brand">ورود</h1>

        <label className="field">
          <span className="label-text">نام کاربری</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="مثلاً ali"
            required
          />
        </label>

        <label className="field">
          <span className="label-text">رمز عبور</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="رمز عبور"
            required
          />
        </label>

        {error && (
          <p style={{ color: "#ff6b6b", fontSize: "0.9rem", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        <button type="submit" className="btn">
          ورود
        </button>

        <div className="foot">
          <a href="#" className="link">
            رمز را فراموش کرده‌اید؟
          </a>
        </div>
      </form>
    </main>
  );
}
