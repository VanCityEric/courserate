import React from 'react'

const SearchDropdown = ({entry, setDashboardHeader, active, i, setIndex, searchArray}) => {

  const pageHandler = () => {
    setDashboardHeader(entry.courseTitle);
  }
  setIndex(i);

  return (
    <div>
        <ul>
           <li>{entry.courseTitle}</li>
        </ul>
    </div>
  )
}

export default SearchDropdown