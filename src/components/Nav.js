import React, { useState } from 'react'
import logo from '../logo.png'
import NewPost from '../modals/NewPost'


const Nav = (
  {
    difficultyArray, 
    courseArray, 
    workloadArray, 
    profRateArray, 
    facultyArray, 
    setDashboardHeader,
    setCourseName,
    setEntriesArray,
    entriesArray,
    courseName,
    courseNumber,
    setCourseNumber,
    professor,
    setProfessor,
    difficulty,
    setDifficulty,
    workload,
    setWorkload,
    profRating,
    setProfRating,
    comments,
    setComments,
    faculty,
    setFaculty,
    courseLike,
    setCourseLike,
    coursesArray,
    setCoursesArray,
    averagesArray,
    setAveragesArray
  }
  ) => {
const[isOpen, setIsOpen ] = useState(false);


  return (
    <React.Fragment>
        <div className="nav-container">
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <ul className="nav-links">
                    <li onClick={()=>setDashboardHeader('Home')}>Home</li>
                    <li onClick={()=>setDashboardHeader('Login')}>Login</li>
                    <button className="btn post-btn" onClick={() => setIsOpen(true)}>Post a Review</button>
                </ul>
            </nav> 
        </div>
    <NewPost 
      open={isOpen} 
      difficultyArray={difficultyArray} 
      courseArray={courseArray} 
      workloadArray={workloadArray} 
      profRateArray={profRateArray} 
      facultyArray={facultyArray} 
      setIsOpen={setIsOpen} 
      setCourseName={setCourseName}
      setEntriesArray={setEntriesArray}
      entriesArray={entriesArray}
      courseName={courseName}
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
      />     
    </React.Fragment>
  )
}

export default Nav