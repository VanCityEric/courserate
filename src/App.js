import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'


const App = () => {
const[dashboardHeader, setDashboardHeader] = useState("Welcome to CourseRate");
const courseArray = ["ACMA", "ALS", "APMA", "ARAB", "ARCH", "BISC", "BPK", "BUS", "CHEM", "CHIN", "COGS", "CMPT", "CA", "CRIM"];
const difficultyArray = ["Very easy", "Easy", "Normal", "Hard", "Very hard"];
const workloadArray = ["Very light", "Light", "Normal", "Heavy", "Very heavy"];
const profRateArray = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];
const facultyArray = ["Applied Sciences", "Arts and Social Sciences", "Beedie School of Business", "Communication, Arts and Technology", "Education", "Environment", "Health Sciences", "Science"];

const[entriesArray, setEntriesArray] = useState([]);
const[courseName, setCourseName] = useState("");
const[courseNumber, setCourseNumber] = useState("");
const[professor, setProfessor] = useState("");
const[difficulty, setDifficulty] = useState("");
const[workload, setWorkload] = useState("");
const[profRating, setProfRating] = useState("");
const[comments, setComments] = useState("");
const[faculty, setFaculty] = useState("");
const[courseLike, setCourseLike] = useState("");
const [coursesArray, setCoursesArray] = useState([]);

  return (
    <React.Fragment>
        <Nav 
          setDashboardHeader = {setDashboardHeader} 
          courseArray={courseArray} 
          difficultyArray={difficultyArray} 
          workloadArray={workloadArray} 
          profRateArray={profRateArray} 
          facultyArray={facultyArray}
          entriesArray={entriesArray}
          setEntriesArray={setEntriesArray}
          courseName={courseName}
          setCourseName={setCourseName}
          courseNumber={courseNumber}
          setCourseNumber={setCourseNumber}
          professor={professor}
          setProfessor={setProfessor}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          workload={workload}
          setWorkload={setWorkload}
          profRating={profRating}
          setProfRating={setProfRating}
          comments={comments}
          setComments={setComments}
          faculty={faculty}
          setFaculty={setFaculty}
          courseLike={courseLike}
          setCourseLike={setCourseLike}
          coursesArray={coursesArray}
          setCoursesArray={setCoursesArray}
          
        />
        <Dashboard 
          dashboardHeader = {dashboardHeader} 
          setEntriesArray={setEntriesArray} 
          entriesArray={entriesArray} 
          courseName={courseName}
        
        />
    </React.Fragment>
  )
}

export default App