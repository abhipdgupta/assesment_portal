import { createContext, useState } from "react";

export const TestContext = createContext(null);

export default function TestContextProvider({ children }) {
  const [testState, setTestState] = useState({
    currentSection: 0,
    currentQuestion:0,
    categories: [],
    questionState: [],
  });

  const [timer,setTimer]=useState({
    m:60,
    s:0,
    isEnded:false,
    isDanger:false
  })


  return (
    <TestContext.Provider value={{ testState, setTestState,timer,setTimer }}>
      {children}
    </TestContext.Provider>
  );
}

// question state formate
// {
//     id: "",
//     category: "",
//     question: "",
//     markedForReview: false,
//     isAnswered: false,
//   }
