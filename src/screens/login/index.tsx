import React, { FormEvent } from "react";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const login = (param: { userName: string; pwd: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userName = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const pwd = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({ userName, pwd });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">用户名</label>
        <input type="text" id="userName" />
      </div>
      <div>
        <label htmlFor="pwd">密码</label>
        <input type="password" id="pwd" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
