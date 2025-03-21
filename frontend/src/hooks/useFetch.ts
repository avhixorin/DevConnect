import { useState } from "react";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  username: string;
  email: string;
  password: string;
};


const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (
    url: string,
    data: object,
    method: "POST" | "GET" = "POST"
  ) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      return await res.json();
    } catch (error) {
      return { success: false, message: (error as Error).message };
    } finally {
      setLoading(false);
    }
  };

  const loginUser = (url: string, data: LoginData, method: "POST" | "GET") => fetchData(url, data, method);
  const registerUser = (url: string, data: RegisterData, method: "POST" | "GET") => fetchData(url, data, method);
  const logoutUser = (url: string, method: "GET") => fetchData(url, {}, method);
  return { loading, loginUser, registerUser, logoutUser };
};

export default useFetch;
