import { createContext, useReducer } from "react";

const AuthContext = createContext();

const storedUser = localStorage.getItem("worldwiseUser");
const storedAuth = localStorage.getItem("worldwiseAuth");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: storedAuth === "true",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
      localStorage.setItem("worldwiseUser", JSON.stringify(FAKE_USER));
      localStorage.setItem("worldwiseAuth", "true");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("worldwiseUser");
    localStorage.removeItem("worldwiseAuth");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
