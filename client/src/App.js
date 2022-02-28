import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import PostSuccess from "./modals/PostSuccess";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";
import NewPage from "./components/ResultsPage";
import ResultsPage from "./components/ResultsPage";
import CoursePage from "./components/CoursePage";
import Footer from "./components/Footer";

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
    "CRIM",
    "DATA",
    "DIAL",
    "DMED",
    "EASC",
    "ECO",
    "ECON",
    "EDUC",
    "EDPR",
    "ETEC",
    "ENSC",
    "ENGL",
    "ENV",
    "EVSC",
    "FASS",
    "FAL",
    "FAN",
    "FREN",
    "GSWS",
    "GS",
    "GEOG",
    "GERM",
    "GERO",
    "GA",
    "GRK",
    "HSCI",
    "HIST",
    "HUM",
    "INLG",
    "INDG",
    "INS",
    "IAT",
    "IS",
    "ITAL",
    "JAPN",
    "LBST",
    "LANG",
    "LAS",
    "LBRL",
    "LS",
    "LING",
    "MTEC",
    "MASC",
    "MATH",
    "MACM",
    "MSE",
    "MBB",
    "NEUR",
    "NUSC",
    "ONC",
    "PERS",
    "PHIL",
    "PHYS",
    "PLAN",
    "POL",
    "PSYC",
    "PLCY",
    "PUB",
    "PUNJ",
    "REM",
    "SCI",
    "SDA",
    "SA",
    "SPAN",
    "STAT",
    "SD",
    "SEE",
    "TEKX",
    "TRSS",
    "URB",
    "WL"
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
  const [coursesArray, setCoursesArray] = useState([]);
  const [averagesArray, setAveragesArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [searchName, setSearchName] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isFilledOpen, setIsFilledOpen] = useState(false);
  const [filledForm, setFilledForm] = useState(false);
  const [currentPageName, setCurrentPageName] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);


  console.log(filledForm);

  const getEntries = async () => {
    try {
      const response = await fetch("/api/get");
      const jsonData = await response.json();
      setEntriesArray(jsonData.rows);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getEntries();
  }, []);

  const getAverages = async () => {
    try {
      const response = await fetch("/api/getAverages");
      const jsonData = await response.json();
      setAveragesArray(jsonData.rows);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getAverages();
  }, []);

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
      <div className="entire-wrapper">
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
            coursesArray={coursesArray}
            setCoursesArray={setCoursesArray}
            averagesArray={averagesArray}
            setAveragesArray={setAveragesArray}
            searchArray={searchArray}
            setSearchArray={setSearchArray}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            filledForm={filledForm}
            setFilledForm={setFilledForm}
            currentPageName={currentPageName}
            setIsSuccessOpen={setIsSuccessOpen}
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
                    searchArray={searchArray}
                    setIsOpen={setIsOpen}
                    setFilledForm={setFilledForm}
                    setCurrentPageName={setCurrentPageName}
                    setIsFilledOpen={setIsFilledOpen}
                    isFilledOpen={isFilledOpen}
                    isOpen={isOpen}
                    difficultyArray={difficultyArray}
                    workloadArray={workloadArray}
                    profRateArray={profRateArray}
                    facultyArray={facultyArray}
                    filledForm={filledForm}
                    currentPageName={currentPageName}
                    courseArray={courseArray}
                    setIsSuccessOpen={setIsSuccessOpen}
                  />
                }
              />
            </Routes>
            <PostSuccess
              isSuccessOpen={isSuccessOpen}
              setIsSuccessOpen={setIsSuccessOpen}
            />
          </div>
        </Router>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
