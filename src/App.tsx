import { useReducer, useState } from "react";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import todoReducer from "./reducers/TodoReducer";
import TodoContext from "./contexts/todoContext";
import authReducer from "./reducers/authReducer";
import LoginContext from "./contexts/loginContext";

const App = () => {
  const [todos, tododispatch] = useReducer(todoReducer, []);
  const [user, userdispatch] = useReducer(authReducer, "");

  return (
    <>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Login/> */}

      <TodoContext.Provider value={{ todos, dispatch: tododispatch }}>
        <LoginContext.Provider value={{ user, dispatch: userdispatch }}>
          <MyNavbar />
          <HomePage />
        </LoginContext.Provider>
      </TodoContext.Provider>
    </>
  );
};

export default App;
