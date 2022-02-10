import React, {useState} from 'react'

const SearchForm = ({entriesArray}) => {
  const [query, setQuery] = useState("");
  const [duplicate, setDuplicate] = useState([]);
  // const duplicateCheck = [];

  // entriesArray.map((data, index) => {
  //     if(duplicate.includes(data.course))
  //     return null;
  //     setDuplicate([{name: data.course}]);
  //     return null;
  // })



  return (
    <div className="dashboard-search">
        <form>
        <label for="search-bar">Search for a course</label>
        <input onChange={e => setQuery(e.target.value)} id="search-bar" className='input' placeholder='e.g. "MACM 201"'></input>
        <button class="search-button btn">Search</button>
        
        {/* {
          duplicateCheck.filter(entry => {
            if(query === '') {
              return null;
            } else if (duplicateCheck.toLowerCase().startsWith(query.toLowerCase())) {
              return entry;
            } 
            return null;
          }).map((entry) => (
            <li>{entry.course}</li>
        ))} */}
        </form>  

    </div>
  )
}

export default SearchForm