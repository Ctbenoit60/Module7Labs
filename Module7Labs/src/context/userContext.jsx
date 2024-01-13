import { useState, useContext, createContext } from "react";

const UserContext = createContext(); //1. creates the context

export const UserProvider = (props) => {
  // store current user in state at top
  const [currentUser, setCurrentUser] = useState({});

  const handleUpdateUser = (user) => {
    //set user object in state => shared via context
    setCurrentUser(user);
  };

  // 2. Provide the context
  //Provider Component of any context sends data via value prop to ALL children at all levels.
  //Sending both the current user and an update function
  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

// 3. Use the context
//this custom hook lets easy access of this particular context from any child component
export const useUserContext = () => {
  return useContext(UserContext);
};