import { createContext, useContext, useState } from "react";

// Create a new context object
export const AuthContext = createContext();

// Custom hook to consume the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Provider component to wrap around children and provide authentication context
export const AuthContextProvider = ({ children }) => {
  // Initialize authUser state, retrieving from localStorage or defaulting to null
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  // Provide the AuthContext with authUser and setAuthUser values
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
