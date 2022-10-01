Loginform.js 

import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import useMutation and LOGIN_USER
import { LOGIN_USER } from "../utils/mutations";

import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: "", password: "" });
    const 
}
