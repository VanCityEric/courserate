import React from "react";
import NewPostFormFilled from "../components/NewPostFormFilled";

const NewPostFilled = ({
  isFilledOpen,
  setIsFilledOpen,
  open,
  difficultyArray,
  courseArray,
  workloadArray,
  profRateArray,
  facultyArray,
  setIsOpen,
  entriesArray,
  coursesArray,
  filledForm,
  setFilledForm,
  currentPageName,
  id,
  courseName,
  courseNumber,
  setIsSuccessOpen,
  averagesArray
}) => {
  if (!isFilledOpen) return null;
  return (
    <div className="add-category-container dim">
      <div className="add-category-wrapper vertical-center">
        <div className="add-category modal">
          <h3 className="modal-title">Post a review for {id}</h3>
          <NewPostFormFilled
            difficultyArray={difficultyArray}
            courseArray={coursesArray}
            workloadArray={workloadArray}
            profRateArray={profRateArray}
            facultyArray={facultyArray}
            setIsOpen={setIsOpen}
            entriesArray={entriesArray}
            filledForm={filledForm}
            setFilledForm={setFilledForm}
            currentPageName={currentPageName}
            courseArray={courseArray}
            id={id}
            currentCourseName={courseName}
            currentCourseNumber={courseNumber}
            isFilledOpen={isFilledOpen}
            setIsFilledOpen={setIsFilledOpen}
            setIsSuccessOpen={setIsSuccessOpen}
            averagesArray={ averagesArray}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPostFilled;
