import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { VisionTest } from "./components/Pages/VisionTest/VisionTest";
import { PatientRecords } from "./components/Pages/PatientRecords/PatientRecords";
import { OCD } from "./components/Pages/OCD/OCD";
import { Reports } from "./components/Pages/Reports/Reports";
import { Chatbot } from "./components/Chatbot/Chatbot";

function App() {
  return (
    <Main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/visiontest" element={<VisionTest />} />
        <Route exact path="/patientrecords" element={<PatientRecords />} />
        <Route exact path="/ocd" element={<OCD />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </Main>
  );
}

export default App;
