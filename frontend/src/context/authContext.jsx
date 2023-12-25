import { createContext, useState } from "react";

export const authContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const loggedInUser = ({ username, email, _id }) => {
    setUser({
      username,
      email,
      _id,
    });
  };

  const loggedOutUser = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ loggedInUser,loggedOutUser,user }}>
      {children}
    </authContext.Provider>
  );
}

// user object
// {
//     _id: "",
//     username:"",
//      email:""
//
//   }
