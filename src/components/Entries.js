import React from 'react'
import { useNavigate } from "react-router-dom";

const Entries = (
  {
    courseName,
    courseNumber,
    professor,
    difficulty,
    workload,
    profRating,
    comments,
    faculty,
    courseLike,
    day,
    month,
    year,
    time,
    title,
    averagesArray,
    entriesArray,
  }) => {

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let className = 'thumbs';
  let index = averagesArray.findIndex(entry => entry.course === courseName && entry.number === courseNumber && entry.prof === professor);
  let entryAverage= (averagesArray[index].average / averagesArray[index].repeat).toFixed(1);
  let monthIndex = 1;
  let userScore = (courseLike).toFixed(1);
  let profScore = (profRating).toFixed(1);

  if(courseLike < 3) {
    className += ' red';
  } else if (courseLike == 3) {
    className += ' yellow';
  } else if (courseLike > 3) {
    className += ' green';
  }

  const navigate = useNavigate();
  const courseClickHandler = (e) => {
    e.preventDefault();
    navigate(`/course/${title}`);
  }

  return (
    <div className="recent-entries entries row section-wrapper">

      <div className="review-like-section col1"> 
        <p className="average-rating">CLASS SCORE</p>
        <div className={className}>{userScore}</div>
        <p className="average-rating margin-top">PROF SCORE </p>
        <div className="thumbs">{profScore}</div>
      </div>


      <div className="review-text-section col2">
      <div className="review-top-row">
        <div className="row">
          <div className="review-course-name col1">
            <h2 onClick={(e) => courseClickHandler(e)}>{courseName} {courseNumber}</h2>
          </div>
          <div className="review-date col2">
            <p className="date">{monthNames[month]} {day}, {year}</p> 
          </div>
        </div>
        <div className="row review-middle-row">
            <p>Professor: <span className="bold">{professor}</span></p>
            <p>Reviewer's Major: <span className="bold">{faculty}</span></p><br></br>
            <p>{comments}</p>

        </div>
        <div className="bottom-row-container">
          <div className="row review-bottom-row">
              <div className="col1">
              <p>Difficulty: <span className="bold">{difficulty}</span></p>
              </div>
              <div className="col2">
              <p>Workload: <span className="bold">{workload}</span></p>
              </div>
          </div>
        </div>
       </div>
      </div>
     

         
  
   
    </div>
  )
}

export default Entries