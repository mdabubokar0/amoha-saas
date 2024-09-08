import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { VisionTest } from "./components/Pages/VisionTest/VisionTest";
import { PatientRecords } from "./components/Pages/PatientRecords/PatientRecords";
import { OCD } from "./components/Pages/OCD/OCD";
import { Reports } from "./components/Pages/Reports/Reports";
import { Welcome } from "./components/Welcome";
import { Login } from "./components/Pages/User/Login";
import { Signup } from "./components/Pages/User/Signup";
import { PatientProfile } from "./components/Pages/PatientRecords/PatientProfile";
import { PatientEdit } from "./components/Pages/PatientRecords/PatientEdit";
import { Profile } from "./components/Pages/User/Profile";

function App() {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/visiontest" element={<VisionTest />} />
        <Route exact path="/patientrecords" element={<PatientRecords />} />
        <Route exact path="/patientprofile/:id" element={<PatientProfile />} />
        <Route exact path="/patientedit/:id" element={<PatientEdit />} />
        <Route exact path="/ocd" element={<OCD />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </Main>
  );
}

export default App;
