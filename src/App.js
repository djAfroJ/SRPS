import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./projectContainer/HomeContainer/Home";
import ExamOfficer from "./projectContainer/examOfficerPage/examOfficer";
import LvlCoord from "./projectContainer/lvlCoord/LvlCoord";
import Student from "./projectContainer/StudentPage/Student";
import HOD from "./projectContainer/HodPAGE/HOD";
import StudentApplication from "./projectContainer/StudentPage/StudentApplication";
import payment from "./projectContainer/StudentPage/payment";
import StudentDashboard from "./projectContainer/StudentPage/StudentDashboard";
import LevelCoordinatorDashboard from "./projectContainer/lvlCoord/LevelCoordinatorDashboard";
import checkApplicants from "./projectContainer/lvlCoord/checkApplicants";
import HODdashboard from "./projectContainer/HodPAGE/HODdashboard";
import ExamOfficerDashboard from "./projectContainer/examOfficerPage/ExamOfficerDashboard";
import StudentSignup from "./projectContainer/StudentPage/StudentSignup";
import levelCordSignuP from "./projectContainer/lvlCoord/levelCordSignuP";
import HODsignup from "./projectContainer/HodPAGE/HODsignup";
import ExamOfficerSignUp from "./projectContainer/examOfficerPage/ExamOfficerSignUp";
import SignUp from "./SignUp";
import StudentLetter from "./projectContainer/StudentPage/StudentLetter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exam" Component={ExamOfficer} />
        <Route path="/student" Component={Student} />
        <Route path="/level-coordinator" Component={LvlCoord} />
        <Route path="/head-of-department" Component={HOD} />
        <Route path="/student-application" Component={StudentApplication} />
        <Route path="/student-dashboard" Component={StudentDashboard} />
        <Route path="/payment" Component={payment} />
        <Route
          path="/level-coord-dashboard"
          Component={LevelCoordinatorDashboard}
        />
        <Route path="/checkApplicants" Component={checkApplicants} />
        <Route path="/hod-dashboard" Component={HODdashboard} />
        <Route path="/examOfficer-dashboard" Component={ExamOfficerDashboard} />
        <Route path="/student-signup" Component={StudentSignup} />
        <Route path="/levelCoord-signup" Component={levelCordSignuP} />
        <Route path="/HOD-Signup" Component={HODsignup} />
        <Route path="/examofficersignup" Component={ExamOfficerSignUp} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/student-letter" Component={StudentLetter} />
      </Routes>
    </Router>
  );
}
export default App;
