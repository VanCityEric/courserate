import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import NewPage from './components/ResultsPage';
import ResultsPage from './components/ResultsPage';



const App = () => {
const[dashboardHeader, setDashboardHeader] = useState("Welcome to CourseRate");
const[resultsHeader, setResultsHeader] = useState("");
const[currentSearchValue, setCurrentSearchValue] = useState();
const courseArray = ["ACMA", "ALS", "ALC", "APMA", "ARAB", "ARCH", "BISC", "BPK", "BUS", "CHEM", "CHIN", "COGS", "CMPT", "CA", "CRIM"];
const difficultyArray = ["Very easy", "Easy", "Normal", "Hard", "Very hard"];
const workloadArray = ["Very light", "Light", "Normal", "Heavy", "Very heavy"];
const profRateArray = ["1", "2", "3", "4", "5"];
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
const[coursesArray, setCoursesArray] = useState([]);
const[averagesArray, setAveragesArray] = useState([]);
const[searchArray, setSearchArray] = useState([]);


useEffect(() => {
  getLocalEntries();
}, []);

useEffect(() => {
  saveLocalEntries();
}, [entriesArray]);

const saveLocalEntries = () => {
    localStorage.setItem("entriesArray", JSON.stringify(entriesArray));
    localStorage.setItem("searchArray", JSON.stringify(searchArray));
    localStorage.setItem("averagesArray", JSON.stringify(averagesArray));
  };

const getLocalEntries = () => {
  if(localStorage.getItem("entriesArray") === null || localStorage.getItem("averagesArray") === null || localStorage.getItem("searchArray") === null) {
    localStorage.setItem("entriesArray", JSON.stringify([]));
    localStorage.setItem("searchArray", JSON.stringify([]));
    localStorage.setItem("averagesArray", JSON.stringify([]));
  } else {
    let entriesLocal = JSON.parse(localStorage.getItem("entriesArray"));
    setEntriesArray(entriesLocal);
    let searchLocal = JSON.parse(localStorage.getItem("searchArray"));
    setSearchArray(searchLocal);
    let averagesLocal = JSON.parse(localStorage.getItem("averagesArray"));
    setAveragesArray(averagesLocal);
  }
}

  React.useEffect(() => {
    const data = localStorage.getItem('currentSearchValue');
    if (data) {
      setCurrentSearchValue(JSON.parse(data));
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('currentSearchValue', JSON.stringify(currentSearchValue));
  })

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
          averagesArray = {averagesArray}
          setAveragesArray={setAveragesArray}
          searchArray={searchArray}
          setSearchArray={setSearchArray}
   
        />
        <Router>
          <Routes>
            <Route path="/Dashboard" element={
            <Dashboard  dashboardHeader = {dashboardHeader} 
              setDashboardHeader={setDashboardHeader}
              setEntriesArray={setEntriesArray} 
              entriesArray={entriesArray} 
              courseName={courseName}
              averagesArray={averagesArray}
              searchArray={searchArray}
              setResultsHeader={setResultsHeader}
              currentSearchValue={currentSearchValue}
              setCurrentSearchValue={setCurrentSearchValue}
              />
            }
            />
            <Route path="/NewPage" element={
            <ResultsPage 
              dashboardHeader={dashboardHeader} 
              resultsHeader={resultsHeader} 
              currentSearchValue={currentSearchValue}
              entriesArray = {entriesArray}
              searchArray = {searchArray}
              averagesArray = {averagesArray}
            />}
            />
            </Routes>
      </Router>
    </React.Fragment>
  
  )
}

export default App