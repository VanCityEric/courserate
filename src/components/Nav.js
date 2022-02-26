import React, { useState } from "react";
import logo from "../logo.png";
import NewPost from "../modals/NewPost";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

const Nav = ({
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
  setAveragesArray,
  searchArray,
  setSearchArray,
  isOpen,
  setIsOpen,
  filledForm,
  setFilledForm,
  currentPageName,
  setIsSuccessOpen
}) => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav>
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>

          <ul className="nav-links">
            <li onClick={() => homeHandler()}>Home</li>
            <li onClick={() => setDashboardHeader("Login")}>Login</li>
            <button className="btn post-btn" onClick={() => setIsOpen(true)}>
              Post a Review
            </button>
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
        entriesArray={entriesArray}
        coursesArray={coursesArray}
        filledForm={filledForm}
        setFilledForm={setFilledForm}
        currentPageName={currentPageName}
        setIsSuccessOpen={ setIsSuccessOpen}
      />
    </React.Fragment>
  );
};

export default Nav;
