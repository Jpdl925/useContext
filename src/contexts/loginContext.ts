import { Dispatch } from "react";
import { AuthAction, LoginAction } from "../reducers/authReducer";
import React from "react";

interface LoginContextType{
    user:string;
    dispatch:Dispatch<AuthAction>
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType)

export default LoginContext;