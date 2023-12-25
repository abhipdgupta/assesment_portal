import Transparentlogo from "../../../assets/logo-white.png";
import useTestContext from "../../../hooks/useTestContext";
export default function TestOverviewDashboard() {
  const { testState} = useTestContext();

  const categories = testState?.categories || [];
  const questionState = testState?.questionState || [];

  const questionsEachCategory = categories.reduce(
    (result, category) => ({
      ...result,
      [category.name]:
        questionState.find((qs) => qs._id === category.code)?.questions
          .length || 0,
    }),
    {}
  );

  const questionsAnsweredEachCategory = categories.reduce(
    (result, category) => {
      const categoryQuestionState = questionState.find(
        (qs) => qs._id === category.code
      );

      const numberOfAnsweredQuestions = categoryQuestionState
        ? categoryQuestionState.questions.reduce(
            (count, question) =>
              question.answered !== null && question.answered !== undefined
                ? count + 1
                : count,
            0
          )
        : 0;

      return { ...result, [category.name]: numberOfAnsweredQuestions };
    },
    {}
  );

  const questionsMarkedForReviewEachCategory = categories.reduce(
    (result, category) => {
      const categoryQuestionState = questionState.find(
        (qs) => qs._id === category.code
      );

      const numberOfMarkedQuestions = categoryQuestionState
        ? categoryQuestionState.questions.reduce(
            (count, question) =>
              question.is_marked_for_review !== null &&
              question.is_marked_for_review !== undefined &&
              question.is_marked_for_review
                ? count + 1
                : count,
            0
          )
        : 0;

      return { ...result, [category.name]: numberOfMarkedQuestions };
    },
    {}
  );

  const questionsNotVisitedEachCategory = categories.reduce(
    (result, category) => {
      const categoryQuestionState = questionState.find(
        (qs) => qs._id === category.code
      );

      const numberOfVisitedQuestions = categoryQuestionState
        ? categoryQuestionState.questions.reduce(
            (count, question) =>
              !(
                question.is_visited !== null &&
                question.is_visited !== undefined &&
                question.is_visited
              )
                ? count + 1
                : count,
            0
          )
        : 0;

      return { ...result, [category.name]: numberOfVisitedQuestions };
    },
    {}
  );

  const totalQuestions = Object.values(questionsEachCategory).reduce(
    (sum, i) => sum + i,
    0
  );

  const totalAnswered = Object.values(questionsAnsweredEachCategory).reduce(
    (sum, i) => sum + i,
    0
  );

  const totalMarkedForReview = Object.values(
    questionsMarkedForReviewEachCategory
  ).reduce((sum, i) => sum + i, 0);

  const totalVisited = Object.values(questionsNotVisitedEachCategory).reduce(
    (sum, i) => sum + i,
    0
  );

  return (
    <div className="bg-white h-screen">
      <header className="bg-gray-600  flex items-center justify-between sm:px-6 ">
        <div className="flex items-center">
          <img
            src={Transparentlogo}
            alt=""
            className=" my-3 w-[142px] h-[48px] md:h-[45px]"
          />
        </div>

        <div className="text-white text-2xl font-semibold flex-grow text-center">
          Dashboard
        </div>
      </header>
      <div className="bg-stone-900 h-6"></div>

      <div className="p-4">
        <div className="bg-stone-950 p-4 rounded-md mt-3">
          <table className="table-auto w-full text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Total Questions</th>
                <th className="px-4 py-2">Answered</th>
                <th className="px-4 py-2">Mark for Review</th>
                <th className="px-4 py-2">Not Visited</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">Overall</td>
                <td className="border px-4 py-2 text-center">
                  {totalQuestions}
                </td>
                <td className="border px-4 py-2 text-center">
                  {totalAnswered}
                </td>
                <td className="border px-4 py-2 text-center">
                  {totalMarkedForReview}
                </td>
                <td className="border px-4 py-2 text-center">{totalVisited}</td>
              </tr>
              {Object.entries(questionsEachCategory).map(([key, value]) => (
                <tr key={key}>
                  <td className="border px-4 py-2 text-center">{key}</td>
                  <td className="border px-4 py-2 text-center">{value}</td>
                  <td className="border px-4 py-2 text-center">
                    {questionsAnsweredEachCategory[key]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {questionsMarkedForReviewEachCategory[key]}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {questionsNotVisitedEachCategory[key]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-center text-xl text-red-800">**Notice**</h1>

      <div className="p-4">
        <div className="bg-gray-600 p-4 rounded-md mt-3">
          <p className="text-center text-white">
            You can download a Google Sheet containing your attempted questions
            and activity summary to submit to{" "}
            <span className="text-black">supportrate@gmail.com.</span>{" "}
          </p>
          <p className="text-center text-white mt-4">
            *Please note that any modifications made to the Google Sheet will
            result in disqualification.
          </p>
          <p className="text-center text-white mt-4">
            <a
              href="#googleSheet"
              className="text-stone-950 underline hover:text-green-200"
            >
              Click here to download
            </a>{" "}
            the Google Sheet.
          </p>
          <p className="text-center text-white mt-4">
            {/* Download button */}
            <button className="bg-stone-950 hover:bg-green-200 text-white px-8 py-2 rounded-md">
              Download
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
