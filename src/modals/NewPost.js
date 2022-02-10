import React, { useState } from 'react'
import NewPostForm from '../components/NewPostForm';

const AddCategory = ({open, setIsOpen, category, setCategory, setCategoryText, categoryText, difficultyArray, courseArray, workloadArray, profRateArray, facultyArray, children}) => {

const[error, setError] = useState("");

const onCancel = () => {
    setError("");
    setIsOpen(false);     
}

const newCategoryHandler = () => {
    if(categoryText !== "") {
        setCategory([
            ...category, {text: categoryText, id: Math.random() * 1000}
        ]);
        setCategoryText("");
        setError("");
        setIsOpen(false);     
    } else {
        setError("Please enter a name");
    }
};

if(!open) return null
  return (
    <div className="add-category-container dim">
        <div className="add-category-wrapper vertical-center">
            <div className="add-category modal">
                <h3 className="modal-title">Post a review</h3>
                <NewPostForm difficultyArray={difficultyArray} courseArray={courseArray} workloadArray={workloadArray} profRateArray={profRateArray} facultyArray={facultyArray}/>
                <p className="error-msg">{error}</p>
                <div className="modal-btn-container">
                    <button className="btn modal-btn btn-outline" onClick={onCancel}> Cancel </button>
                    <button className="btn modal-btn" onClick={newCategoryHandler}> Done </button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default AddCategory