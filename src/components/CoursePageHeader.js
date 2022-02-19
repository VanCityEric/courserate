import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DifficultyProgress from "./DifficultyProgress";

const CoursePageHeader = ({
  id,
  averagesArray,
  entriesArray,
  courseName,
  courseNumber,
  difficulty,
  workload,
  repeat
}) => {
  let averageDifficulty = difficulty / repeat;
  let averageWorkload = workload / repeat;
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

  return (
    <div className="container">
      <div className="wrapper course-page-container">
        <div className="course-page">
          <div className="row">
            <div className="col1">
              <div className="table course-page-title">
                <div className="vertical">
                  <h2>{id}</h2>
                  <h3>Simon Fraser University </h3>
                  <button className="btn coursepage-btn">
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
                  <p>
                    Difficulty:{" "}
                    <span className="bold course-page-rating">
                      {averageDifficulty}
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
                      {averageWorkload}
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
  );
};

export default CoursePageHeader;
