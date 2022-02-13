import React, {useState, useEffect} from 'react'
import SearchDropdown from './SearchDropdown';
import { useNavigate } from "react-router-dom";
import NewPage from './ResultsPage';


const SearchForm = ({searchArray, setDashboardHeader, setResultsHeader, currentSearchValue, setCurrentSearchValue}) => {
  const [query, setQuery] = useState("");
  const [searchFound, setSearchFound] = useState("");
  const [index, setIndex] = useState();
  let className = "search-dropdown-container";
  
  console.log(query);
  console.log(currentSearchValue);
  console.log(index);

  searchArray.filter(entry => {
    if(query !== '' && entry.courseTitle.toLowerCase().includes(currentSearchValue.toLowerCase())) {
      className = " show-search-dropdown";
      return null;
    } 
  })

  const queryHandler = (e) => {
    currentSearchValue = e.target.value;
    setQuery(e.target.value);
    console.log(query);
   
  }
  const [active, setActive] = useState(0);

  const keyDownHandler = (e) => {
    if(e.key === "ArrowUp") {
      setActive(active - 1);
      if(active === -1) {
        setActive(active);
      }
    } else if (e.key === "ArrowDown") {
      setActive(active + 1);
      if(active > index - 1) {
        setActive(active);
      }
    }
    console.log(active);
  }

  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if(searchArray.some(searchArray => searchArray.courseTitle.toLowerCase() === query.toLowerCase()) || searchArray.some(searchArray => searchArray.course.toLowerCase() === query.toLowerCase())) {
      setResultsHeader(currentSearchValue.toUpperCase());
      setCurrentSearchValue(query.toUpperCase());
      setSearchFound("search found");
      navigate("/NewPage");
    } else {
      setSearchFound("search not found")
    }   
  }
  return (
    <div className="dashboard-search">
        <form>
        <label for="search-bar">Search for a course</label>
        <input onChange={queryHandler} onKeyDown={keyDownHandler} id="search-bar" className='input' placeholder='e.g. "MACM 201"'></input>
        <button onClick={searchHandler} class="search-button btn">Search</button>
        <p className="search-error">{searchFound}</p>
          {/* <div className={className} onMouseOver={onMouseOverHandler}>
            {
              searchArray.filter((entry) => {
                if(query === '' || !(entry.courseTitle.toLowerCase().includes(query.toLowerCase()))) {
                  return null;
                } else if (entry.courseTitle.toLowerCase().includes(query.toLowerCase())) {
                  return entry;
                } 
                return null;
              }).map((entry, i) => 
                    <SearchDropdown 
                      entry={entry}  
                      setDashboardHeader = {setDashboardHeader} 
                      active={active} 
                      i={i} 
                      setIndex={setIndex}
                      searchArray={searchArray}
                    />    
            )}
          </div> */}
        </form>  

    </div>
  )
}

export default SearchForm