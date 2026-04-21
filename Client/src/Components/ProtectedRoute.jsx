import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      console.log("AUTH USER:", u);
      setUser(u || null);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  return children;
};

export default ProtectedRoute;