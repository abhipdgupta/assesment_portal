import axios from "axios";
import useTestContext from "../../../hooks/useTestContext";
import { useEffect, useCallback, useState } from "react";
import { Grow } from "../../../components/ui/loading";
import { Error } from "../../../components/ui/error";
import TestPortalHeader from "./components/testPortalHeader";
import { Outlet } from "react-router-dom";

function TestPortalLayout() {
  const { setTestState } = useTestContext();
  //   const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //   const categories = useMemo(
  //     () => testState.categories || [],
  //     [testState.categories]
  //   );
  //   const { category } = useParams();

  const fetchAllQuestions = useCallback(async () => {
    try {
      const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}/assessment/all-questions`
      );

    console.log(data);
      if (data.status_code === 200) {
        setTestState((prev) => ({
          ...prev,
          questionState: data.data,
        }));
      } else {
        console.error("Error fetching questions:", data.message);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching questions:", error.message);
      throw new Error(error.message);
    }
  }, [setTestState]);

  const fetchAllCategories = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/assessment/all-categories`
      );
      if (data.status_code === 200) {
        setTestState((prev) => ({
          ...prev,
          categories: data.data,
        }));
      } else {
        console.error("Error fetching categories:", data.message);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw new Error(error.message);
    }
  }, [setTestState]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        await Promise.all([fetchAllCategories(), fetchAllQuestions()]);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchAllQuestions, fetchAllCategories]);

  //   useEffect(() => {
  //     if (categories.length > 0 && !category) {
  //       navigate(categories[0].name);
  //     }
  //   }, [categories, navigate, category]);

  if (isLoading) return <Grow />;
  if (error) return <Error message={error} />;
  return (
    <div className="flex h-screen flex-col">
      <TestPortalHeader />

      <Outlet />
    </div>
  );
}

export default TestPortalLayout;
