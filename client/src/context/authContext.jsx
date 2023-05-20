import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Souhaieb Mediouni",
      profilePic:
        "https://media.licdn.com/dms/image/D4D03AQGz14lqNd2Btg/profile-displayphoto-shrink_200_200/0/1675297712294?e=1687392000&v=beta&t=XNzN8-53Q9SomADvsALyHPBdRqAXLPAMOAX9CnnBoVE",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
