import React from 'react'
import NewPostForm from '../components/NewPostForm';

const AddCategory = (
    {
        open, 
        setIsOpen, 
        difficultyArray,
        courseArray, 
        workloadArray, 
        profRateArray, 
        facultyArray, 
        setCourseName,
        setEntriesArray,
        entriesArray,
        courseName,
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
        setCoursesArray,
        children
    }) => {

if(!open) return null
  return (
    <div className="add-category-container dim">
        <div className="add-category-wrapper vertical-center">
            <div className="add-category modal">
                <h3 className="modal-title">Post a review</h3>
                <NewPostForm 
                    difficultyArray={difficultyArray} 
                    courseArray={courseArray} 
                    workloadArray={workloadArray} 
                    profRateArray={profRateArray} 
                    facultyArray={facultyArray}
                    setCourseName={setCourseName}
                    setEntriesArray={setEntriesArray}
                    setIsOpen = {setIsOpen}
                    entriesArray={entriesArray}
                    courseName={courseName}
                    courseNumber={courseNumber}
                    setCourseNumber={setCourseNumber}
                    professor={professor}
                    setProfessor={setProfessor}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    workload={workload}
                    setWorkload={setWorkload}
                    profRating={profRating}
                    setProfRating={setProfRating}
                    comments={comments}
                    setComments={setComments}
                    faculty={faculty}
                    setFaculty={setFaculty}
                    courseLike={courseLike}
                    setCourseLike={setCourseLike}
                    coursesArray={coursesArray}
                    setCoursesArray={setCoursesArray}
                />
            </div>
        </div>
    </div>
  )
}

export default AddCategory