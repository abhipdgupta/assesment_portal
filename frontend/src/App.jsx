import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landing-page/landingPage";
import VerifyToken from "./pages/candidate/verify-token/verifyToken";
import Register from "./pages/candidate/register/register";
import CheckRequirements from "./pages/candidate/check-requirements/checkRequirements";
import TestPortalLayout from "./pages/candidate/test-portal/testPortalLayout";
import TestPortalQuestionPanel from "./pages/candidate/test-portal/components/testPortalQuestionPanel";
import TestOverviewDashboard from "./pages/candidate/dashboard/testOverviewDashboard";
import AdminLogin from "./pages/admin/login";
import AdminRegister from "./pages/admin/register";
function App() {  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="candidate">
          <Route path="verify-token" element={<VerifyToken />} />
          <Route path="register" element={<Register />} />
          <Route path="check-requirements" element={<CheckRequirements />} />
          <Route path="test-portal" element={<TestPortalLayout />}>
          <Route path=":category" element={<TestPortalQuestionPanel />} />
          </Route>
          <Route path="dashboard" element={<TestOverviewDashboard />} />
        </Route>
        <Route path="admin">
          <Route path="login" element={<AdminLogin />} />
          <Route path="register" element={<AdminRegister/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
