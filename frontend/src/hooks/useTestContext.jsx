import { useContext } from "react";
import { TestContext } from "../context/testContext";

export default function useTestContext() {
  return useContext(TestContext);
}
