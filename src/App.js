import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";
import NewPage from "./components/ResultsPage";
import ResultsPage from "./components/ResultsPage";
import CoursePage from "./components/CoursePage";

const App = () => {
  const [dashboardHeader, setDashboardHeader] = useState(
    "Welcome to CourseRate"
  );
  const [resultsHeader, setResultsHeader] = useState("");
  const [currentSearchValue, setCurrentSearchValue] = useState();
  const courseArray = [
    "ACMA",
    "ALS",
    "ALC",
    "APMA",
    "ARAB",
    "ARCH",
    "BISC",
    "BPK",
    "BUS",
    "CHEM",
    "CHIN",
    "COGS",
    "CMPT",
    "CA",
    "CRIM"
  ];
  const difficultyArray = [
    "1 - Very easy",
    "2 - Easy",
    "3 - Normal",
    "4 - Hard",
    "5 - Very hard"
  ];
  const workloadArray = [
    "1 - Very light",
    "2 - Light",
    "3 - Normal",
    "4 - Heavy",
    "5 - Very heavy"
  ];
  const profRateArray = ["1", "2", "3", "4", "5"];
  const facultyArray = [
    "Applied Sciences",
    "Arts and Social Sciences",
    "Beedie School of Business",
    "Communication, Arts and Technology",
    "Education",
    "Environment",
    "Health Sciences",
    "Science"
  ];

  const [entriesArray, setEntriesArray] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [professor, setProfessor] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [workload, setWorkload] = useState("");
  const [profRating, setProfRating] = useState("");
  const [comments, setComments] = useState("");
  const [faculty, setFaculty] = useState("");
  const [courseLike, setCourseLike] = useState("");
  const [coursesArray, setCoursesArray] = useState([]);
  const [averagesArray, setAveragesArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [searchName, setSearchName] = useState();

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
    if (
      localStorage.getItem("entriesArray") === null ||
      localStorage.getItem("averagesArray") === null ||
      localStorage.getItem("searchArray") === null
    ) {
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
  };

  React.useEffect(() => {
    const data = localStorage.getItem("currentSearchValue");
    if (data) {
      setCurrentSearchValue(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    const stateInfo = JSON.stringify(currentSearchValue);
    if (stateInfo) {
      localStorage.setItem("currentSearchValue", stateInfo);
    }
  });

  React.useEffect(() => {
    const data = localStorage.getItem("searchName");
    if (data) {
      setSearchName(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    const stateInfo = JSON.stringify(searchName);
    if (stateInfo) {
      localStorage.setItem("searchName", stateInfo);
    }
  });

  return (
    <React.Fragment>
      <Router>
        <Nav
          setDashboardHeader={setDashboardHeader}
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
          averagesArray={averagesArray}
          setAveragesArray={setAveragesArray}
          searchArray={searchArray}
          setSearchArray={setSearchArray}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  dashboardHeader={dashboardHeader}
                  setDashboardHeader={setDashboardHeader}
                  setEntriesArray={setEntriesArray}
                  entriesArray={entriesArray}
                  courseName={courseName}
                  averagesArray={averagesArray}
                  searchArray={searchArray}
                  setResultsHeader={setResultsHeader}
                  currentSearchValue={currentSearchValue}
                  setCurrentSearchValue={setCurrentSearchValue}
                  setSearchName={setSearchName}
                  searchName={searchName}
                />
              }
            />
            <Route
              exact
              path={"/search/:id"}
              element={
                <ResultsPage
                  dashboardHeader={dashboardHeader}
                  resultsHeader={resultsHeader}
                  currentSearchValue={currentSearchValue}
                  entriesArray={entriesArray}
                  searchArray={searchArray}
                  averagesArray={averagesArray}
                  setSearchName={setSearchName}
                  searchName={searchName}
                  setCurrentSearchValue={setCurrentSearchValue}
                />
              }
            />
            <Route
              exact
              path={"/course/:id"}
              element={
                <CoursePage
                  averagesArray={averagesArray}
                  entriesArray={entriesArray}
                  difficulty={difficulty}
                  courseName={courseName}
                  courseNumber={courseNumber}
                  searchArray={searchArray}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
