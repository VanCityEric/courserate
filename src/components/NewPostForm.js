import React, { useState } from 'react'

const NewPostForm = (
    {
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
        coursesArray,
        setCoursesArray

    }) => {
    const[error, setError] = useState("");

    const onCancel = () => {
        setError("");
        setIsOpen(false);     
    }

    const newEntryHandler = () => {
        if(courseName !== "") {
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
                    id: Math.random() * 1000
                }
            ]);
            setCourseNumber("");
            setCourseName("");
            setProfessor("")
            setDifficulty("");
            setWorkload("");
            setProfRating("");
            setComments("");
            setFaculty("");
            setCourseLike("")
            setIsOpen(false); 

        } else {
            setError("Please fill in required fields.");
            setIsOpen(true);   
        }
    };

  return (
    <React.Fragment>
    <form> 
        <p class="form-divider">COURSE DETAILS</p>
        <div className="row">  
            <div className="col1">
                <label for="course-name">*Course</label>
                    <select onChange={(e) => setCourseName(e.target.value)} id="course-name" class="course-name">
                        <option>Choose course</option>
                        {courseArray.map((course) => (
                            <option>{course}</option>
                        ))}
                    </select>
            </div> 
            <div className="col2">
                <label for="course-number">*Course number</label>
                <input onChange={(e) => setCourseNumber(e.target.value)} id="course-number" className="input" type="text" placeholder='e.g. "225"' size="13"></input>
            </div> 

            <div className="col3">
                <label for="course-number">*Professor</label>
                <input onChange={(e) => setProfessor(e.target.value)} id="professor" className="input" type="text" placeholder='e.g. "John Smith"' size="30"></input>
            </div> 
        </div>
        <p class="form-divider">YOUR REVIEW</p>                 
        <div className="row">  
            <div className="col1">
                <label for="course-difficulty">*Difficulty</label>
                    <select onChange={(e) => setDifficulty(e.target.value)} id="course-difficulty" class="course-difficulty">
                        <option>Choose difficulty</option>
                        {difficultyArray.map((difficulty) => (
                            <option>{difficulty}</option>
                        ))}
                    </select>
            </div> 
            <div className="col2">
                <label for="course-workload">*Workload</label>
                    <select onChange={(e) => setWorkload(e.target.value)} id="course-workload" class="course-workload">
                        <option>Choose workload</option>
                        {workloadArray.map((workload) => (  
                            <option>{workload}</option>
                        ))}
                    </select>
            </div> 
            <div className="col3">
                <label for="prof-rate">Professor rating</label>
                    <select onChange={(e) => setProfRating(e.target.value)} id="prof-rate">
                        <option>Rate (1-5)</option>
                        {profRateArray.map((profRate) => (
                            <option>{profRate}</option>
                        ))}
                    </select>
            </div> 
        </div> 
        <div className="row">  
            <label for="comment">Comments</label>
            <textarea onChange={(e) => setComments(e.target.value)} rows="6"></textarea>
        </div> 
        <div className="row">  
            <div className="col1">
                <label for="faculty">Your faculty</label>
                    <select onChange={(e) => setFaculty(e.target.value)} id="faculty" class="faculty">
                        <option>Choose faculty</option>
                        {facultyArray.map((faculty) => (
                            <option>{faculty}</option>
                        ))}
                    </select>
            </div> 
            <div className="col2">
                <label for="course-like">*Did you like the course?</label>
                <select onChange={(e) => setCourseLike(e.target.value)} id="course-like" class="course-like">
                    <option>Choose option</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>I'm indifferent</option>
                </select>
            </div> 
        </div> 
        <p className="error-msg">{error}</p>          
    </form>
      <div className="modal-btn-container">
        <button className="btn modal-btn btn-outline" onClick={onCancel}> Cancel </button>
        <button className="btn modal-btn" onClick={newEntryHandler}> Done </button>
      </div> 
    </React.Fragment>
    
  )
}

export default NewPostForm