import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { VisionTest } from "./components/Pages/VisionTest/VisionTest";
import { PatientRecords } from "./components/Pages/PatientRecords/PatientRecords";
import { OCD } from "./components/Pages/OCD/OCD";
import { Reports } from "./components/Pages/Reports/Reports";
import { Login } from "./components/Pages/User/Login";
import { Signup } from "./components/Pages/User/Signup";
import { PatientProfile } from "./components/Pages/PatientRecords/PatientProfile";
import { PatientEdit } from "./components/Pages/PatientRecords/PatientEdit";
import { Profile } from "./components/Pages/User/Profile";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { HomePage } from "./components/Pages/HomePage";
import { LoginPage } from "./components/Pages/LoginPage";
import { DemoPage } from "./components/Pages/DemoPage";
import { ErrorPage } from "./components/Pages/ErrorPage";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Amoha.ai</title>
        <meta
          name="description"
          content="Amoha.ai is an innovative Software-as-a-Service (SaaS) MedTech platform designed to revolutionize the early detection and management of various ocular conditions such as diabetic retinopathy, glaucoma, AMD, cataracts, etc., which, if unchecked, can lead to significant vision loss or even blindness."
        />
      </Helmet>
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/demopage" element={<DemoPage />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/visiontest" element={<VisionTest />} />
          <Route exact path="/patientrecords" element={<PatientRecords />} />
          <Route
            exact
            path="/patientprofile/:id"
            element={<PatientProfile />}
          />
          <Route exact path="/patientedit/:id" element={<PatientEdit />} />
          <Route exact path="/ocd" element={<OCD />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Main>
    </HelmetProvider>
  );
}

export default App;
