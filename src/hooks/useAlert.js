import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ message: "", type: "success" });

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: "success" }), 4000);
  };
  const hideAlert = () => setAlert({ message: "", type: "success" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
