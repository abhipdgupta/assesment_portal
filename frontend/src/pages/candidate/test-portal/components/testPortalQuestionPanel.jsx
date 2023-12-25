import { useNavigate, useParams } from "react-router-dom";
import useTestContext from "../../../../hooks/useTestContext";
import { useEffect, useState } from "react";
import RightIcon from "../../../../assets/icons-right.png";

function TestPortalQuestionPanel() {
  const navigate = useNavigate();
  const { category } = useParams();
  
  const { testState, setTestState } = useTestContext();

  const [selectAnswer, setSelectAnswer] = useState({});
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const categories = testState.categories;

  const categoryIndex = categories?.findIndex(
    (element) => element.name === category
  );

  const categoryCode = testState?.categories?.find(
    (element) => element.name === category
  )?.code;

  const categoryQuestionsIndex = testState?.questionState.findIndex(
    (element) => element._id === categoryCode
  );

  const categoryQuestions =
    testState?.questionState?.[categoryQuestionsIndex]?.questions;

  const selectedQuestion = categoryQuestions?.[selectedQuestionIndex]?.question;

  const selectedQuestionOptions =
    categoryQuestions?.[selectedQuestionIndex]?.options;

  const selectedQuestionAnswered =
    categoryQuestions?.[selectedQuestionIndex]?.answered;

  const updateTestState = (
    selectedOptionIndex,
    selectedQuestionIndex,
    categoryQuestionsIndex,
    isSkip,
    isMarkedForReview,
    is_visited
  ) => {
    setTestState((prev) => {
      const newArray = [...prev.questionState];
      const updatedObject = { ...newArray[categoryQuestionsIndex] };
      const updatedSubArray = [...updatedObject.questions];
      const updatedSubObject = { ...updatedSubArray[selectedQuestionIndex] };

      if (
        updatedSubObject.is_visited !== undefined &&
        (selectedOptionIndex === null || selectedOptionIndex === undefined) &&
        isMarkedForReview === null &&
        isSkip === null
      )
        return { ...prev };

      updatedSubObject.answered =
        selectedOptionIndex !== null && selectedOptionIndex !== undefined
          ? selectedOptionIndex
          : isSkip
          ? null
          : updatedSubObject.answered;
      updatedSubObject.is_marked_for_review = isMarkedForReview;
      updatedSubObject.is_skip = isSkip;
      updatedSubObject.is_visited = is_visited;

      updatedSubArray[selectedQuestionIndex] = updatedSubObject;
      updatedObject.questions = updatedSubArray;
      newArray[categoryQuestionsIndex] = updatedObject;

      return {
        ...prev,
        questionState: newArray,
      };
    });
  };

  const navigateNextSectionOrQuestion = () => {
    if (selectedQuestionIndex < categoryQuestions.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    } else {
      if (testState.currentSection < categories.length - 1) {
        setTestState((prev) => ({
          ...prev,
          currentSection: testState.currentSection + 1,
        }));
        navigate(
          `/candidate/test-portal/${
            categories[testState.currentSection + 1].name
          }`
        );
      }
    }
  };

  const handleSubmitAnswer = (i) => {
    const selectedOptionIndex = i;

    updateTestState(
      selectedOptionIndex,
      selectedQuestionIndex,
      categoryQuestionsIndex,
      false,
      false,
      true
    );
    navigateNextSectionOrQuestion();
  };

  const handleMarkedForReview = (i) => {
    const selectedOptionIndex = i;

    updateTestState(
      selectedOptionIndex,
      selectedQuestionIndex,
      categoryQuestionsIndex,
      false,
      true,
      true
    );

    navigateNextSectionOrQuestion();
  };

  const handleSkip = () => {
    updateTestState(
      null,
      selectedQuestionIndex,
      categoryQuestionsIndex,
      true,
      false,
      true
    );

    navigateNextSectionOrQuestion();
  };

  const handleVisited = (i) => {
    updateTestState(null, i, categoryQuestionsIndex, null, null, true);
  };

  const handleSelectQuestion = (i) => {
    handleVisited(i);
    setSelectedQuestionIndex(i);
  };

  useEffect(() => {
    // if (categoryQuestions && categoryQuestions.length > 0) {
    //     setTestState((prev) => {
    //       const newArray = [...prev.questionState];
    //       const updatedObject = { ...newArray[categoryQuestionsIndex] };
    //       const updatedSubArray = [...updatedObject.questions];
    //       const updatedSubObject = { ...updatedSubArray[0] };
    
    //       updatedSubObject.is_visited = true;
    
    //       updatedSubArray[0] = updatedSubObject;
    //       updatedObject.questions = updatedSubArray;
    //       newArray[categoryQuestionsIndex] = updatedObject;
    
    //       return {
    //         ...prev,
    //         questionState: newArray,
    //       };
    //     });
    //   }
    setSelectedQuestionIndex(0);

    setTestState((prev) => ({ ...prev, currentSection: categoryIndex }));
  }, [category, categoryIndex, setTestState]);

  useEffect(() => {
    setSelectAnswer(null);
  }, [category, selectedQuestionIndex]);

  return (
    <div className="w-full h-full flex p-4 gap-4">
      {/* LEFT PANEL */}
      <QuestionPanel
        handleMarkedForReview={handleMarkedForReview}
        handleSkip={handleSkip}
        handleSubmitAnswer={handleSubmitAnswer}
        currentSelectedAnswer={selectAnswer}
        setCurrentSelectedAnswer={setSelectAnswer}
        currentQuestionText={selectedQuestion}
        currentQuestionAnswered={selectedQuestionAnswered}
        currentQuestionOptions={selectedQuestionOptions}
      />
      {/* RIGHT PANEL */}
      <QuestionsList
        currentCategoryQuestions={categoryQuestions}
        handleSelectQuestion={handleSelectQuestion}
        currentQuestionIndex={selectedQuestionIndex}
      />
    </div>
  );
}

export default TestPortalQuestionPanel;

const QuestionPanel = ({
  currentQuestionText,
  currentQuestionOptions,
  currentSelectedAnswer,
  handleMarkedForReview,
  handleSkip,
  handleSubmitAnswer,
  setCurrentSelectedAnswer,
  currentQuestionAnswered,
}) => {
  return (
    <>
      <div className="flex-1 bg-slate-200 rounded-lg flex flex-col justify-between p-4">
        <div className={`p-4 flex flex-col gap-8 h-full`}>
          <h1 className="text-xl font-medium">{currentQuestionText}</h1>
          <div className="flex flex-col gap-8">
            {currentQuestionOptions?.map((option, i) => (
              <div key={i}>
                <div className="flex gap-8 text-xl items-center ">
                  <div
                    className={`cursor-pointer bg-gray-500 text-white w-8 h-8 rounded-full flex items-center justify-center
                      ${currentSelectedAnswer === i ? "bg-green-700" : null}
                      ${currentQuestionAnswered === i ? "bg-green-700" : null}
                      
                      
                      `}
                    onClick={() => {
                      setCurrentSelectedAnswer(i);
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>{option}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex mt-8 space-x-4 items-end">
            <button
              className="bg-purple-800 text-white h-12 w-36 hover:bg-purple-700 rounded-full flex items-center justify-center"
              onClick={() => handleMarkedForReview(currentSelectedAnswer)}
            >
              Mark for Review
            </button>
            <button
              className="bg-red-800 text-white h-12 w-36 hover:bg-red-700 rounded-full flex items-center justify-center"
              onClick={() => {
                handleSkip();
              }}
            >
              Skip & Next
            </button>

            <button
              className="bg-green-800 text-white h-12 w-36 hover:bg-green-700 rounded-full flex items-center justify-center"
              onClick={() => handleSubmitAnswer(currentSelectedAnswer)}
            >
              Submit & Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const QuestionsList = ({
  currentCategoryQuestions,
  currentQuestionIndex,
  handleSelectQuestion,
}) => {
  const [expandList, setExpandList] = useState(false);

  return (
    <div
      className={`${
        expandList ? "w-1/2" : "w-1/3"
      } relative bg-slate-900 transition-all duration-[1s] rounded-lg 
   `}
    >
      <div
        className={`text-white cursor-pointer`}
        onClick={() => setExpandList(!expandList)}
      >
        <img
          src={RightIcon}
          className={`w-8 ${expandList ? null : "rotate-180"}`}
          alt="Icon"
        />
      </div>

      <div className={` flex justify-between gap-4 p-8 flex-wrap  `}>
        {currentCategoryQuestions?.map((q, i) => (
          <div
            key={i}
            className={`bg-gray-500 text-white h-20 w-20 rounded-full flex items-center justify-center cursor-pointer text-xl 
        ${i === currentQuestionIndex ? "border-2 border-white" : ""}
        ${getColor(q)}
      
        
        `}
            onClick={() => handleSelectQuestion(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

const getColor = (question) => {
  if (
    question.answered !== null &&
    question.answered !== undefined &&
    !question.is_marked_for_review
  ) {
    return "bg-green-700"; // If answered and not marked for review, green
  } else if (question.is_marked_for_review) {
    return "bg-purple-700"; // If marked for review, purple
  } else if (question.is_skip) {
    return "bg-red-700"; // If skip, red
  } else if (question.is_visited) {
    return "bg-yellow-700"; // If visited and not answered, marked for review, or skipped, yellow
  }

  return "bg-gray-500";
};
