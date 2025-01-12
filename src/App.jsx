import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LoginPage from "./components/Pages/LoginPage";
import PageNotFound from "./components/Pages/PageNotFound";
import { Login } from "./components/Pages/User/Login";
import { Signup } from "./components/Pages/User/Signup";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { VisionTest } from "./components/Pages/VisionTest/VisionTest";
import { PatientRecords } from "./components/Pages/PatientRecords/PatientRecords";
import { OCD } from "./components/Pages/OCD/OCD";
import { Reports } from "./components/Pages/Reports/Reports";
import { PatientProfile } from "./components/Pages/PatientRecords/PatientProfile";
import { PatientEdit } from "./components/Pages/PatientRecords/PatientEdit";
import { Profile } from "./components/Pages/User/Profile";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProjectedRoute";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Amoha.ai - Login</title>
        <link rel="canonical" href={`${import.meta.env.VITE_SAAS_URL}`} />
      </Helmet>
      <ToastContainer />
      <Main>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/visiontest" element={<VisionTest />} />
          </Route>

          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/patientrecords" element={<PatientRecords />} />
          <Route
            exact
            path="/patientprofile/:id"
            element={<PatientProfile />}
          />
          <Route exact path="/patientedit/:id" element={<PatientEdit />} />
          <Route exact path="/ocd" element={<OCD />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
    </HelmetProvider>
  );
}

export default App;
