import React, { useState } from 'react'
import logo from '../logo.png'
import NewPost from '../modals/NewPost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = ({difficultyArray, courseArray, workloadArray, profRateArray, facultyArray, setDashboardHeader}) => {
const[isOpen, setIsOpen ] = useState(false);
const[categoryText, setCategoryText] = useState("");
const[category, setCategory] = useState([]);


  return (
    <React.Fragment>
        <div className="nav-container">
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <ul className="nav-links">
                    <li onClick={()=>setDashboardHeader('Home')}><FontAwesomeIcon icon="coffee" />Home</li>
                    <li onClick={()=>setDashboardHeader('Login')}>Login</li>
                    <button className="btn post-btn" onClick={() => setIsOpen(true)}>Post a Review</button>
                </ul>
            </nav> 
        </div>
    <NewPost open={isOpen} difficultyArray={difficultyArray} courseArray={courseArray} workloadArray={workloadArray} profRateArray={profRateArray} facultyArray={facultyArray} setIsOpen={setIsOpen} category={category} setCategory={setCategory} setCategoryText={setCategoryText} categoryText={categoryText}/>     
    </React.Fragment>
  )
}

export default Nav