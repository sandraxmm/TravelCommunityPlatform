import React, { useState } from "react";
import { Link } from "react-router-dom";

// import apollo client and ADD_USER mutation
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // addUser with useMutation
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // addUser function
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="card bg-white card-rounded w-50">
      <div class="card-header bg-dark text-center">
        <h1>Sign up Form</h1>
        {data ? (
          <p>
            Success! You may now head <Link to="/"> back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="container">
              <span>Username</span>
              <input
                className="form-input"
                type="text"
                placeholder="Enter Username"
                name="username"
                value={userFormData.name}
                onChange={handleInputChange}
              />

              <span>Email</span>
              <input
                className="form-input"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userFormData.email}
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
                type="submit"
                style={{ cursor: "pointer " }}
              >
                Sign up
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

export default SignupForm;
