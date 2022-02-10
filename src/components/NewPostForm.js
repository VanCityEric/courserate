import React from 'react'

const NewPostForm = ({courseArray, difficultyArray, workloadArray, profRateArray, facultyArray}) => {

  return (
      
    <form> 
        <p class="form-divider">COURSE DETAILS</p>
        <div className="row">  
            <div className="col1">
                <label for="course-name">*Course</label>
                    <select id="course-name" class="course-name">
                        {courseArray.map((course) => (
                            <option>{course}</option>
                        ))}
                    </select>
            </div> 
            <div className="col2">
                <label for="course-number">*Course number</label>
                <input id="course-number" className="input" type="text" placeholder='e.g. "225"' size="13"></input>
            </div> 

            <div className="col3">
                <label for="course-number">*Professor</label>
                <input id="course-number" className="input" type="text" placeholder='e.g. "John Smith"' size="30"></input>
            </div> 
        </div>
        <p class="form-divider">YOUR REVIEW</p>                 
        <div className="row">  
            <div className="col1">
                <label for="course-difficulty">*Difficulty</label>
                    <select id="course-difficulty" class="course-difficulty">
                        {difficultyArray.map((difficulty) => (
                            <option>{difficulty}</option>
                        ))}
                    </select>
            </div> 
            <div className="col2">
                <label for="course-workload">*Workload</label>
                    <select id="course-workload" class="course-workload">
                        {workloadArray.map((workload) => (
                            <option>{workload}</option>
                        ))}
                    </select>
            </div> 
            <div className="col3">
                <label for="prof-rate">Professor rating</label>
                    <select id="prof-rate">
                        {profRateArray.map((profRate) => (
                            <option>{profRate}</option>
                        ))}
                    </select>
            </div> 
        </div> 
        <div className="row">  
            <label for="comment">Comments</label>
            <textarea rows="6"></textarea>
        </div> 
        <div className="row">  
            <div className="col1">
                <label for="faculty">Your faculty</label>
                    <select id="faculty" class="faculty">
                        {facultyArray.map((faculty) => (
                            <option>{faculty}</option>
                        ))}
                    </select>
            </div> 
            <div className="col2">
                <label for="course-number">*Did you like the course?</label>
                <select id="major">
                    <option>Yes</option>
                    <option>No</option>
                    <option>I'm indifferent</option>
                </select>
            </div> 
        </div> 
                
    </form>
  )
}

export default NewPostForm