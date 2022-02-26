import React from "react";
import NewPostForm from "../components/NewPostForm";

const NewPost = ({
  open,
  setIsOpen,
  difficultyArray,
  courseArray,
  workloadArray,
  profRateArray,
  facultyArray,
  entriesArray,
  filledForm,
  setFilledForm,
  currentPageName,
  setIsSuccessOpen,
  children
}) => {
  if (!open) return null;
  return (
    <div className="add-category-container dim">
      <div className="add-category-wrapper vertical-center">
        <div className="add-category modal">
          <h3 className="modal-title">Post a review</h3>
          <NewPostForm
            difficultyArray={difficultyArray}
            courseArray={courseArray}
            workloadArray={workloadArray}
            profRateArray={profRateArray}
            facultyArray={facultyArray}
            setIsOpen={setIsOpen}
            entriesArray={entriesArray}
            filledForm={filledForm}
            setFilledForm={setFilledForm}
            currentPageName={currentPageName}
            setIsSuccessOpen={ setIsSuccessOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPost;
