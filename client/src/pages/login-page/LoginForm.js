import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useMutation and LOGIN_USER
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

//import { useNavigate } from "react-router-dom";

import Auth from "../../utils/auth";

const LoginForm = () => {
  //const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.loginUser.token);

      setUserFormData({
        username: "",
        password: "",
      });

      //navigate("/timeline");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="card bg-white card-rounded w-50">
      <div class="card-header text-center">
        <h1>Login Form</h1>
        {data ? (
          <p>
            Success! You may now head <Link to="/"> back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div class="container">
              <span>Username</span>
              <input
                className="form-input"
                type="username"
                placeholder="Enter Username"
                name="username"
                value={userFormData.username}
                onChange={handleInputChange}
              />

              <span>Password</span>
              <input
                className="form-input"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userFormData.password}
                onChange={handleInputChange}
              />

              <button
                className="btn btn-block btn-primary"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
