import React, {useState, useEffect} from 'react'
import SearchDropdown from './SearchDropdown';
import { useNavigate } from "react-router-dom";
import NewPage from './ResultsPage';


const SearchForm = ({searchArray, setDashboardHeader, setResultsHeader, currentSearchValue, setCurrentSearchValue, searchName, setSearchName}) => {
  const [query, setQuery] = useState("");
  const [searchFound, setSearchFound] = useState("");
  const [index, setIndex] = useState();
  let className = "search-dropdown-container";
  
  console.log(query);
  console.log(currentSearchValue);
  console.log(index);

  const queryHandler = (e) => {
    setCurrentSearchValue(e.target.value)
    setQuery(e.target.value);
    setSearchName((e.target.value))
    console.log(query);

    if (e.target.value === "") {
      setSearchFound("");
    }
  }

  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if(searchArray.some(searchArray => searchArray.courseTitle.toString().toLowerCase() === query.toLowerCase()) 
    || searchArray.some(searchArray => searchArray.course.toLowerCase() === query.toLowerCase())
    || searchArray.some(searchArray => searchArray.number === query)
    ) {
      setResultsHeader(currentSearchValue);
      setSearchFound("search found");
      navigate(`/search/${(searchName)}`);
    } else {
      setSearchFound("Sorry, course not found. Add a course by submitting a review.")
    }

   
  }
  return (
    <div className="dashboard-search">
        <form>
        <label for="search-bar">Search for a course</label>
        <input onChange={queryHandler}  id="search-bar" className='input' placeholder='e.g. "MACM 201", "MACM", or "201"'></input>
        <button onClick={searchHandler} class="search-button btn">Search</button>
        <p className="search-error">{searchFound}</p>
  
        </form>  

    </div>
  )
}

export default SearchForm