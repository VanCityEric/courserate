import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NewPostFilled from "../modals/NewPostFilled";

const CoursePageHeader = ({
  id,
  averagesArray,
  entriesArray,
  courseName,
  courseNumber,
  difficulty,
  workload,
  average,
  repeat,
  setIsOpen,
  setFilledForm,
  setCurrentPageName,
  isFilledOpen,
  setIsFilledOpen,
  isOpen,
  difficultyArray,
  workloadArray,
  coursesArray,
  profRateArray,
  facultyArray,
  courseArray,
  filledForm,
  currentPageName,
  setIsSuccessOpen
}) => {
  let averageDifficulty = difficulty / repeat;
  let averageWorkload = workload / repeat;
  let averageQuality = average / repeat;
  let difficultyBar = (averageDifficulty / 5) * 100;
  let difficultyBarWidth = difficultyBar + "%";
  let workloadBar = (averageWorkload / 5) * 100;
  let workloadBarWidth = workloadBar + "%";

  const difficultyProgressBarStyle = {
    width: difficultyBarWidth,
    backgroundColor: "rgb(140, 0, 255)",
    height: "100%"
  };

  const workloadProgressBarStyle = {
    width: workloadBarWidth,
    backgroundColor: "rgb(140, 0, 255)",
    height: "100%"
  };

  let qualityClassName = " col1 cp-overall-rating table";

  if (averageQuality < 3) {
    qualityClassName += " red";
  } else if (averageQuality === 3) {
    qualityClassName += " yellow";
  } else if (averageQuality > 3) {
    qualityClassName += " green";
  }

  const openFilledFormHander = () => {
    setIsFilledOpen(true);
    setFilledForm(true);
    setCurrentPageName(courseName);
  };

  return (
    <React.Fragment>
      <NewPostFilled
        isFilledOpen={isFilledOpen}
        setIsFilledOpen={setIsFilledOpen}
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
        id={id}
        courseName={courseName}
        courseNumber={courseNumber}
        setIsSuccessOpen={setIsSuccessOpen}
        averagesArray={averagesArray}
      />
      <div className="container">
        <div className="wrapper course-page-container">
          <div className="course-page">
            <div className="row">
              <div className="col1">
                <div className="table course-page-title">
                  <div className="vertical">
                    <h2>{id}</h2>
                    <h3>Simon Fraser University</h3>
                    <button
                      className="btn coursepage-btn"
                      onClick={() => setIsFilledOpen(true)}
                    >
                      Review this course
                    </button>
                  </div>
                </div>
              </div>
              <div className="col1">
                <div className="table course-page-graph">
                  <div className="vertical">
                    <h3>Average Ratings </h3>
                    <br />
                    <div className="cp-overall-rating-container row">
                      <div className={qualityClassName}>
                        <div className="vertical">
                          <h2>{averageQuality.toFixed(1)}</h2>
                        </div>
                      </div>
                      <div className="col2 cp-overall-text table">
                        <div className="vertical">
                          <p>
                            Course quality based on{" "}
                            <span className="bold"> {repeat} review(s)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p>
                      <br />
                      Difficulty:{" "}
                      <span className="bold course-page-rating">
                        {averageDifficulty.toFixed(1)}
                      </span>{" "}
                      <span className="out-of-five">/ 5</span>
                    </p>
                    <div className="progress-bar-border">
                      <div style={difficultyProgressBarStyle}></div>
                    </div>{" "}
                    <br />
                    <p>
                      Workload:{" "}
                      <span className="bold course-page-rating">
                        {averageWorkload.toFixed(1)}
                      </span>{" "}
                      <span className="out-of-five">/ 5</span>
                    </p>
                    <div className="progress-bar-border">
                      <div style={workloadProgressBarStyle}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursePageHeader;
