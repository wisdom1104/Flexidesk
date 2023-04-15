import React, { useState } from "react";

function Login2() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [certification, setCertification] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError("비밀번호는 최소 8자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  }

  function handlepasswordCheckChange(event) {
    const value = event.target.value;
    setpasswordCheck(value);

    if (value !== password) {
      setPasswordCheckError("비밀번호와 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (passwordCheck !== password) {
      setPasswordCheckError("비밀번호와 일치하지 않습니다.");
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">이름</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      </div>
      <div>
        <label htmlFor="passwordCheck">Confirm Password:</label>
        <input
          type="password"
          id="passwordCheck"
          value={passwordCheck}
          onChange={handlepasswordCheckChange}
        />
        {passwordCheckError && (
          <div style={{ color: "red" }}>{passwordCheckError}</div>
        )}
      </div>
      <button type="submit">Submit</button>
      </form>
  );
}
export default Login2;