import React, { useEffect, useState } from "react";
import axios from "axios";

const NewPostForm = ({
  courseArray,
  difficultyArray,
  workloadArray,
  profRateArray,
  facultyArray,
  setIsOpen,
  entriesArray,
  filledForm,
  setFilledForm,
  currentPageName,
  setIsSuccessOpen
}) => {
  const [error, setError] = useState("");
  const [courseGrade, setCourseGrade] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseNumber, setCourseNumber] = useState();
  const [courseProfessor, setCourseProfessor] = useState("");
  const [courseDifficulty, setCourseDifficulty] = useState("");
  const [courseWorkload, setCourseWorkload] = useState("");
  const [courseProfRating, setCourseProfRating] = useState("");
  const [courseComments, setCourseComments] = useState("");
  const [courseFaculty, setCourseFaculty] = useState("");
  const [courseQuality, setCourseQuality] = useState("");


  const onCancel = () => {
    setError("");
    setIsOpen(false);
    setFilledForm(false);
  };
  const courseQualityHandler = (e) => {
    if (e.target.value === "1 - avoid it all costs!") {
      setCourseQuality(1);
    } else if (e.target.value === "3 - just fine") {
      setCourseQuality(3);
    } else if (e.target.value === "5 - awesome class!") {
      setCourseQuality(5);
    } else {
      setCourseQuality(Number(e.target.value));
    }
  };

  const difficultyHandler = (e) => {
    if (e.target.value === "1 - Very easy") {
      setCourseDifficulty(1);
    } else if (e.target.value === "2 - Easy") {
      setCourseDifficulty(2);
    } else if (e.target.value === "3 - Normal") {
      setCourseDifficulty(3);
    } else if (e.target.value === "4 - Hard") {
      setCourseDifficulty(4);
    } else if (e.target.value === "5 - Very hard") {
      setCourseDifficulty(5);
    }
  };

  const workloadHandler = (e) => {
    if (e.target.value === "1 - Very light") {
      setCourseWorkload(1);
    } else if (e.target.value === "2 - Light") {
      setCourseWorkload(2);
    } else if (e.target.value === "3 - Normal") {
      setCourseWorkload(3);
    } else if (e.target.value === "4 - Heavy") {
      setCourseWorkload(4);
    } else if (e.target.value === "5 - Very heavy") {
      setCourseWorkload(5);
    }
  };

  let titleCourse = courseName + " " + courseNumber;
  let date = new Date();

  const NewEntryHandler = async (e) => {
    if (filledForm === true) {
      setCourseName(currentPageName);
    }
    e.preventDefault();
    
    try {
      const body = { courseName };
      const numbery = { courseNumber };
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://pern-todo-app-demo.herokuapp.com/todos
      const response = await fetch("/api/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body, numbery),
      
      });
    } catch (err) {
      console.error(err.message);
    }

    // if (
    //   // courseName !== "" &&
    //   courseQuality !== "" &&
    //   courseNumber !== "" &&
    //   courseProfessor !== "" &&
    //   courseDifficulty !== "" &&
    //   courseWorkload !== "" &&
    //   courseProfRating !== "" &&
    //   courseFaculty !== ""
    // ) {
    //   axios.post("/api/insert", {
    //     courseName: courseName,
    //     courseNumber: courseNumber,
    //     courseProf: courseProfessor,
    //     courseDifficulty: courseDifficulty,
    //     courseWorkload: courseWorkload,
    //     courseProfRating: courseProfRating,
    //     courseComment: courseComments,
    //     courseFaculty: courseFaculty,
    //     courseQuality: courseQuality,
    //     courseGrade: courseGrade,
    //     courseTag1: tag1,
    //     courseTag2: tag2,
    //     courseTag3: tag3,
    //     courseTitle: titleCourse,
    //     courseYear: date.getFullYear(),
    //     courseMonth: date.getMonth(),
    //     courseDay: date.getDate(),
    //     courseTime: date.getTime()
    //   }).then(() => {
    //     alert("success");
    //   });

    //   axios.post("/api/averagesinsert", {
    //     averageName: courseName,
    //     averageNumber: courseNumber,
    //     averageAvg: courseQuality,
    //     averageDifficulty: courseDifficulty,
    //     averageWorkload: courseWorkload,
    //     averageRepeat: 1,
    //     averageProf: courseProfessor,
    //     averageTitle: titleCourse,
    //     averageTime: date.getTime()
    //   });

    //   axios.post("/api/update", {
    //     updateName: courseName,
    //     updateNumber: courseNumber,
    //     updateProf: courseProfessor,
    //     updateAvg: courseQuality,
    //     updateWorkload: courseWorkload,
    //     updateDifficulty: courseDifficulty
    //   });

    //   setIsOpen(false);
    //   setIsSuccessOpen(true);
    // } else {
    //   setError("Please fill in required fields.");
    //   setIsOpen(true);
    //   setIsSuccessOpen(false);
    // }
  };



  const [tagClassName, setTagClassName] = useState("tag");
  const tagHandler = (e) => {
    if (tag1 === "" && tag2 === "" && tag3 === "") {
      setTag1(e.target.value);
    } else if (!(tag1 === "") && tag2 === "" && tag3 === "") {
      setTag2(e.target.value);
    } else if (!(tag1 === "") && !(tag2 === "") && tag3 === "") {
      setTag3(e.target.value);
    }
  };

  const clearTagsHandler = (e) => {
    e.preventDefault();
    setTag1("");
    setTag2("");
    setTag3("");
  };

  let courseNameValue = "";
  if (filledForm === true) {
    courseNameValue = currentPageName;
  } else if (filledForm === false) {
    courseNameValue = "Choose course";
  }

  return (
    <React.Fragment>
      <div className="new-post-container">
        <form>
          <p className="form-divider">COURSE DETAILS</p>
          <div className="row">
            <div className="col1">
              <label htmlFor="course-name">*Course</label>
              <select
                onChange={(e) => setCourseName(e.target.value)}
                id="course-name"
                className="course-name select-form"
                name="course-name"
                defaultValue={courseNameValue}
              >
                <option>Choose course</option>
                {courseArray.map((course) => (
                  <option>{course}</option>
                ))}
              </select>
            </div>
            <div className="col2">
              <label htmlFor="course-number">*Course number</label>
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
              <label htmlFor="course-number">*Professor</label>
              <input
                onChange={(e) => setCourseProfessor(e.target.value)}
                id="professor"
                className="input"
                type="text"
                placeholder='e.g. "John Smith"'
                size="30"
              ></input>
            </div>
          </div>
          <p className="form-divider">YOUR REVIEW</p>
          <div className="row">
            <div className="col1">
              <label htmlFor="course-difficulty">*Difficulty</label>
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
              <label htmlFor="course-workload">*Workload</label>
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
              <label htmlFor="prof-rate">*Professor rating</label>
              <select
                onChange={(e) => setCourseProfRating(Number(e.target.value))}
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
            <label htmlFor="comment">Comments</label>
            <textarea
              onChange={(e) => setCourseComments(e.target.value)}
              rows="6"
            ></textarea>
          </div>
          <div className="row tags-container">
            <label>
              {" "}
              Choose up to 3 tags: <br />
              <br />
              <span className="bold">
                {tag1} &nbsp;&nbsp; {tag2} &nbsp;&nbsp; {tag3}
              </span>{" "}
            </label>
            <button className="btn tag-btn" onClick={clearTagsHandler}>
              Clear
            </button>
            <br />
            <input
              className={tagClassName}
              value="#ExamHeavy"
              onClick={tagHandler}
              style={{ width: "9em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#TonsOfAssignments"
              onClick={tagHandler}
              style={{ width: "12.8em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#TonsOfReading"
              onClick={tagHandler}
              style={{ width: "10.7em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#Avoid"
              onClick={tagHandler}
              style={{ width: "6.2em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#AwesomeProf"
              onClick={tagHandler}
              style={{ width: "10em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#BoostYourGPA"
              onClick={tagHandler}
              style={{ width: "10.3em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#Interesting"
              style={{ width: "8.5em" }}
              onClick={tagHandler}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#ToughGrading"
              onClick={tagHandler}
              style={{ width: "10.2em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#TheoryHeavy"
              onClick={tagHandler}
              style={{ width: "9.9em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#NoFinals"
              onClick={tagHandler}
              style={{ width: "7.6em" }}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#AttendanceMandatory"
              onClick={tagHandler}
              readOnly
            ></input>
            <input
              className={tagClassName}
              value="#ParticipationCounts"
              onClick={tagHandler}
              style={{ width: "12.8em" }}
              readOnly
            ></input>
          </div>
          <div className="row">
            <div className="col1">
              <label htmlFor="faculty">*Your faculty</label>
              <select
                onChange={(e) => setCourseFaculty(e.target.value)}
                id="faculty"
                className="faculty select-form"
              >
                <option>Choose faculty</option>
                {facultyArray.map((faculty) => (
                  <option>{faculty}</option>
                ))}
              </select>

              <label htmlFor="course-like">
                <br />
                *How would you rate this class over all?
              </label>
              <select
                onChange={courseQualityHandler}
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
            <div className="col2">
              <label htmlFor="course-grade">*Grade received:</label>

              <select
                onChange={(e) => setCourseGrade(e.target.value)}
                id="course-grade"
                className="course-grade select-form"
              >
                <option>N/A</option>
                <option>A+</option>
                <option>A</option>
                <option>A-</option>
                <option>B+</option>
                <option>B</option>
                <option>B-</option>
                <option>C+</option>
                <option>C</option>
                <option>C-</option>
                <option>D</option>
                <option>F</option>
                <option>WD</option>
              </select>
            </div>
          </div>
          <p className="error-msg">{error}</p>
          <div className="modal-btn-container">
            <button className="btn modal-btn btn-outline" onClick={onCancel}>
              {" "}
              Cancel{" "}
            </button>
            <button
              type="submit"
              onClick={NewEntryHandler}
              className="btn modal-btn"
            >
              {" "}
              Done{" "}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewPostForm;
