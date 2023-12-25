import { useContext } from "react";
import { authContext } from "../context/authContext";

export  function useAuthContext() {
  return useContext(authContext);
}
