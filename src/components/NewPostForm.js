import React, { useState } from "react";

const NewPostForm = ({
  courseArray,
  difficultyArray,
  workloadArray,
  profRateArray,
  facultyArray,
  setIsOpen,
  entriesArray,
  setEntriesArray,
  courseName,
  setCourseName,
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
  averagesArray,
  setAveragesArray,
  searchArray,
  setSearchArray,
  coursesArray,
  setCoursesArray
}) => {
  const [error, setError] = useState("");

  const onCancel = () => {
    setError("");
    setIsOpen(false);
  };
  const courseLikeHandler = (e) => {
    if (e.target.value === "1 - avoid it all costs!") {
      setCourseLike(1);
    } else if (e.target.value === "3 - just fine") {
      setCourseLike(3);
    } else if (e.target.value === "5 - awesome class!") {
      setCourseLike(5);
    } else {
      setCourseLike(Number(e.target.value));
    }
  };

  const difficultyHandler = (e) => {
    if (e.target.value === "1 - Very easy") {
      setDifficulty(1);
    } else if (e.target.value === "2 - Easy") {
      setDifficulty(2);
    } else if (e.target.value === "3 - Normal") {
      setDifficulty(3);
    } else if (e.target.value === "4 - Hard") {
      setDifficulty(4);
    } else if (e.target.value === "5 - Very hard") {
      setDifficulty(5);
    }
  };

  const workloadHandler = (e) => {
    if (e.target.value === "1 - Very light") {
      setWorkload(1);
    } else if (e.target.value === "2 - Light") {
      setWorkload(2);
    } else if (e.target.value === "3 - Normal") {
      setWorkload(3);
    } else if (e.target.value === "4 - Heavy") {
      setWorkload(4);
    } else if (e.target.value === "5 - Very heavy") {
      setWorkload(5);
    }
  };

  let titleCourse = courseName + " " + courseNumber;

  const newEntryHandler = () => {
    let date = new Date();

    if (
      courseName !== "" &&
      courseLike !== "" &&
      courseNumber !== "" &&
      professor !== "" &&
      difficulty !== "" &&
      workload !== "" &&
      profRating !== "" &&
      faculty !== ""
    ) {
      if (
        searchArray.some((searchArray) => searchArray.courseTitle === titleCourse )
      ) {
        setError("That already exists.");
      } else {
        setSearchArray([
          ...searchArray,
          {
            course: courseName,
            courseTitle: courseName + " " + courseNumber,
            number: courseNumber

          }
        ]);
      }

      if (
        averagesArray.some(
          (averagesArray) =>
            averagesArray.course === courseName &&
            averagesArray.number === courseNumber 
        )
      ) {
        let index = averagesArray.findIndex(
          (entry) =>
            entry.course === courseName &&
            entry.number === courseNumber
        );
        averagesArray[index].repeat++;
        averagesArray[index].average += courseLike;
        averagesArray[index].difficulty += difficulty;
        averagesArray[index].workload += workload;
        setError("That already exists.");
      } else {
        setAveragesArray([
          ...averagesArray,
          {
            course: courseName,
            number: courseNumber,
            average: courseLike,
            difficulty: difficulty,
            workload: workload,
            repeat: 1,
            prof: professor,
            title: courseName + " " + courseNumber
          }
        ]);
      }

      setEntriesArray([
        ...entriesArray,
        {
          course: courseName,
          number: courseNumber,
          prof: professor,
          diff: difficulty,
          work: workload,
          rateprof: profRating,
          comment: comments,
          fac: faculty,
          like: courseLike,
          title: courseName + " " + courseNumber,
          year: date.getFullYear(),
          day: date.getDate(),
          month: date.getMonth(),
          time: date.getTime(),
          id: Math.random() * 1000
        }
      ]);
      setCourseNumber("");
      setCourseName("");
      setProfessor("");
      setDifficulty("");
      setWorkload("");
      setProfRating("");
      setComments("");
      setFaculty("");
      setCourseLike("");
      setIsOpen(false);
    } else {
      setError("Please fill in required fields.");
      setIsOpen(true);
    }
  };

  return (
    <React.Fragment>
      <div className="new-post-container">
        <form>
          <p className="form-divider">COURSE DETAILS</p>
          <div className="row">
            <div className="col1">
              <label for="course-name">*Course</label>
              <select
                onChange={(e) => setCourseName(e.target.value)}
                id="course-name"
                className="course-name select-form"
              >
                <option>Choose course</option>
                {courseArray.map((course) => (
                  <option>{course}</option>
                ))}
              </select>
            </div>
            <div className="col2">
              <label for="course-number">*Course number</label>
              <input
                onChange={(e) => setCourseNumber(e.target.value)}
                id="course-number"
                className="input"
                type="text"
                placeholder='e.g. "225"'
                size="13"
              ></input>
            </div>

            <div className="col3">
              <label for="course-number">*Professor</label>
              <input
                onChange={(e) => setProfessor(e.target.value)}
                id="professor"
                className="input"
                type="text"
                placeholder='e.g. "John Smith"'
                size="30"
              ></input>
            </div>
          </div>
          <p class="form-divider">YOUR REVIEW</p>
          <div className="row">
            <div className="col1">
              <label for="course-difficulty">*Difficulty</label>
              <select
                onChange={difficultyHandler}
                id="course-difficulty"
                className="course-difficulty select-form"
              >
                <option>Choose difficulty</option>
                {difficultyArray.map((difficulty) => (
                  <option>{difficulty}</option>
                ))}
              </select>
            </div>
            <div className="col2">
              <label for="course-workload">*Workload</label>
              <select
                onChange={workloadHandler}
                id="course-workload"
                className="course-workload select-form"
              >
                <option>Choose workload</option>
                {workloadArray.map((workload) => (
                  <option>{workload}</option>
                ))}
              </select>
            </div>
            <div className="col3">
              <label for="prof-rate">*Professor rating</label>
              <select
                onChange={(e) => setProfRating(Number(e.target.value))}
                id="prof-rate"
                className="select-form"
              >
                <option>Rate (1-5)</option>
                {profRateArray.map((profRate) => (
                  <option>{profRate}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <label for="comment">Comments</label>
            <textarea
              onChange={(e) => setComments(e.target.value)}
              rows="6"
            ></textarea>
          </div>
          <div className="row">
            <div className="col1">
              <label for="faculty">*Your faculty</label>
              <select
                onChange={(e) => setFaculty(e.target.value)}
                id="faculty"
                className="faculty select-form"
              >
                <option>Choose faculty</option>
                {facultyArray.map((faculty) => (
                  <option>{faculty}</option>
                ))}
              </select>
            </div>
            <div className="col2">
              <label for="course-like">
                *How would you rate this class over all?
              </label>
              <select
                onChange={courseLikeHandler}
                id="course-like"
                className="course-like select-form"
              >
                <option>Rate the course (1-5)</option>
                <option>1 - avoid it all costs!</option>
                <option>2</option>
                <option>3 - just fine</option>
                <option>4</option>
                <option>5 - awesome class! </option>
              </select>
            </div>
          </div>
          <p className="error-msg">{error}</p>
        </form>
        <div className="modal-btn-container">
          <button className="btn modal-btn btn-outline" onClick={onCancel}>
            {" "}
            Cancel{" "}
          </button>
          <button className="btn modal-btn" onClick={newEntryHandler}>
            {" "}
            Done{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPostForm;
