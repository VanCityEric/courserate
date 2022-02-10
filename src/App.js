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

  return (
    <React.Fragment>
         <Nav setDashboardHeader = {setDashboardHeader}  courseArray={courseArray} difficultyArray={difficultyArray} workloadArray={workloadArray} profRateArray={profRateArray} facultyArray={facultyArray}/>
        <Dashboard dashboardHeader = {dashboardHeader}/>
    </React.Fragment>
  )
}

export default App