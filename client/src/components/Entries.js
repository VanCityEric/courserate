import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Entries = ({
  courseName,
  courseNumber,
  professor,
  difficulty,
  workload,
  comments,
  faculty,
  courseLike,
  day,
  month,
  year,
  title,
  grade,
  tag1,
  tag2,
  tag3,
  thumbsUp,
  courseId,
}) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  useEffect(() => {
    setThumbsUpNumber(thumbsUp);
  }, [thumbsUp]);

  let qualityClassName = "thumbs table";
  let difficultyClassName = "thumbs table";
  let workloadClassName = "thumbs table";
  const [thumbsUpNumber, setThumbsUpNumber] = useState(1);
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);

  let userScore = courseLike.toFixed(1);
  let difficultyScore = difficulty.toFixed(1);
  let workloadScore = workload.toFixed(1);

  if (courseLike < 3) {
    qualityClassName += " red";
  } else if (courseLike === 3) {
    qualityClassName += " yellow";
  } else if (courseLike > 3) {
    qualityClassName += " green";
  }

  React.useEffect(() => {
    const data = localStorage.getItem("thumbsUpState");
    if (data) {
      setThumbsUpClicked(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    const stateInfo = JSON.stringify(thumbsUpClicked);
    if (stateInfo) {
      localStorage.setItem("thumbsUpState", stateInfo);
    }
  }, [thumbsUpClicked]);

  // if (difficultyScore > 3) {
  //   difficultyClassName += " red";
  // } else if (difficultyScore == 3) {
  //   difficultyClassName += " yellow";
  // } else if (difficultyScore < 3) {
  //   difficultyClassName += " green";
  // }

  // if (workloadScore > 3) {
  //   workloadClassName += " red";
  // } else if (workloadScore == 3) {
  //   workloadClassName += " yellow";
  // } else if (workloadScore < 3) {
  //   workloadClassName += " green";
  // }

  const navigate = useNavigate();
  const courseClickHandler = (e) => {
    e.preventDefault();
    navigate(`/course/${title}`);
  };

  const thumbsUpHandler = async () => {
    if (thumbsUpClicked === false) {
      setThumbsUpClicked(true);
    } else  {
      setThumbsUpClicked(false)
    }

    setThumbsUpNumber(thumbsUpNumber + 1);
    try {
      const body = {
        courseId,
        thumbsUpNumber
      };
      await fetch("/api/incrementThumbsUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(thumbsUpClicked);
  console.log(thumbsUpNumber);

  return (
    <div className="recent-entries entries row section-wrapper">
      <div className="review-like-section col1">
        <p className="average-rating">QUALITY</p>
        <div className={qualityClassName}>
          <div className="vertical">
            <div>{userScore}</div>
          </div>
        </div>

        <p className="average-rating margin-top">DIFFICULTY </p>
        <div className={difficultyClassName}>
          <div className="vertical">
            <div>{difficultyScore}</div>
          </div>
        </div>
        <p className="average-rating margin-top">WORKLOAD </p>
        <div className={workloadClassName}>
          <div className="vertical">
            <div>{workloadScore}</div>
          </div>
        </div>
      </div>

      <div className="review-text-section col2">
        <div className="review-top-row">
          <div className="row">
            <div className="review-course-name col1">
              <h2 onClick={(e) => courseClickHandler(e)}>
                {courseName} {courseNumber}
              </h2>
            </div>
            <div className="review-date col2">
              <p className="date">
                {monthNames[month]} {day}, {year}
              </p>
            </div>
          </div>
          <div className="row review-middle-row">
            <p>
              Professor: <span className="bold">{professor}</span>
            </p>

            <br />
            <p>
              <span className="bold">Comment:</span>
            </p>
            <p>{comments}</p>
          </div>
          <span className="entry-tags">{tag1}</span>
          <span className="entry-tags">{tag2}</span>
          <span className="entry-tags">{tag3}</span>
          <div className="bottom-row-container">
            <div className="row review-bottom-row">
              <div className="col2 major">
                <p>
                  Major: <span className="bold">{faculty}</span>
                </p>
              </div>
              <div className="col2 grade-received">
                <p>
                  Grade received: <span className="bold">{grade}</span>
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entries;
