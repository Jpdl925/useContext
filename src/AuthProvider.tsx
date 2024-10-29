import { ReactNode, useReducer } from "react";
import LoginContext from "./contexts/loginContext"
import authReducer from "./reducers/authReducer";

interface Props {
    children:ReactNode;
}

const AuthProvider = ({children}: Props) => {

    const [user, dispatch] = useReducer(authReducer, "");

    return (
        <LoginContext.Provider value={{user,dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider;