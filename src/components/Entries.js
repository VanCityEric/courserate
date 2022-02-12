import React from 'react'

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
    averagesArray,
    entriesArray
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

  return (
    <div className="recent-entries row">
        <div className="review-like-section col2"> 
      <p className="average-rating">CLASS SCORE</p>
      <div className={className}>{userScore}</div>

      <p className="average-rating margin-top">PROF SCORE:</p>
      <div className="thumbs">{profScore}</div>
      {/* <p className="quality margin-top">AVERAGE RATING</p>
      <div className={className}>{averagesArrayPoop}</div> */}
      

      </div>
    <div className="review-text-section col1">
      <div className="review col1">
          <h1>{courseName} {courseNumber}</h1>
          <p><span className="bold">Professor: </span>{professor}</p><br/>
          <p><span className="bold">Reviewer's Major: </span>{faculty}</p>
          <br/>
          <p className="bold">Comment:</p>
          <p>{comments}</p>

          <br/><br/>
          <div className="row">
              <div className="col1 col"><p><span className="bold">Difficulty: </span> {difficulty} </p></div>
              <div className="col2 col"><p><span className="bold">Workload: </span>{workload}</p></div>    
          </div>
        </div>
        <div className="col2">
          <p className="date">{monthNames[monthIndex]} {entriesArray[index].day}, {entriesArray[index].year}</p> 
        </div>
    </div>
      
  
    </div>
  )
}

export default Entries