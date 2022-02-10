import React from 'react'

const SearchForm = () => {
  return (
    <div className="dashboard-search">
        <form>
        <label for="search-bar">Search for a course</label>
        <input id="search-bar" className='input' placeholder='e.g. "MACM 201"'></input>
        <button class="search-button btn">Search</button>
        </form>    
    </div>
  )
}

export default SearchForm