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
    courseLike
  }) => {
  return (
    <div className="recent-entries">
        <h2>{courseName} {courseNumber}</h2>
        <p>{professor}</p><br/>
        <p><span className="bold">Reviewer's Major: </span>{faculty}</p>
        <br/>
        <p className="bold">Comment:</p>
        <p>{comments}</p>

        <br /><br />
        <div className="row">
            <div className="col1 col"><p><span className="bold">Difficulty: </span> {difficulty} </p></div>
            <div className="col2 col"><p><span className="bold">Workload: </span>{workload}</p></div>
            <div className="col3 col"><p><span className="bold">Professor rating: </span>{profRating}</p></div>
            <div className="col3 col"><p><span className="bold">Did you like the course?: </span>{courseLike}</p></div>
        </div>
    </div>
  )
}

export default Entries