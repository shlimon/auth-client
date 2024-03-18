import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { message } from "antd";

const useSignup = () => {
  const auth = useAuth();
  console.log(auth);
  const { login } = auth;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError(null);
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.status === 201) {
        message.success(data.message);
        login(data.token, data.user);
      } else if (response.status === 400) {
        setError(data.message);
      } else {
        message.error("Registration Failed");
      }
    } catch (error) {
      message.error("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default useSignup;
