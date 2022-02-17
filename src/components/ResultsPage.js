import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResultsHeader from './ResultsHeader'
import SearchEntries from './SearchEntries'
import { useHistory } from 'react-router'

const ResultsPage = ({dashboardHeader, resultsHeader, currentSearchValue, entriesArray, averagesArray, searchArray, setSearchName, searchName, setCurrentSearchValue}) => {
  
  const { id } = useParams();

  document.title = `Search results for ${(searchName).toString().toUpperCase()}`;

  return (
    
   
    <div className='container results-container'>
  
      <div className='results-wrapper wrapper'>
          <ResultsHeader currentSearchValue = {id}/>
        
        {
           averagesArray.filter((entry) => {
             if(!(entry.title.toString().toLowerCase().includes(id.toString().toLowerCase()))) {
               return null;
             } else {
               return entry;
             }
           }).map((entry) => (
               <SearchEntries averagesArray={averagesArray} entry={entry} /> 
          ))
          }
      </div>
      
    </div>
  )
}
 
export default ResultsPage