import React, { useState } from "react";
import logo from "../courseratelogo.svg";
import NewPost from "../modals/NewPost";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

const Nav = ({
  difficultyArray,
  courseArray,
  workloadArray,
  profRateArray,
  facultyArray,
  entriesArray,
  coursesArray,
  averagesArray,
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
            <img className="logo" src={logo} alt="logo" onClick={homeHandler} />
          </div>

          <ul className="nav-links">
            <li onClick={() => homeHandler()}>Home</li>
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
        setIsSuccessOpen={setIsSuccessOpen}
        averagesArray={averagesArray}
      />
    </React.Fragment>
  );
};

export default Nav;
