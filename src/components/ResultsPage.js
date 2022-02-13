import React from 'react'
import ResultsHeader from './ResultsHeader'
import SearchEntries from './SearchEntries'

const ResultsPage = ({dashboardHeader, resultsHeader, currentSearchValue, entriesArray, averagesArray}) => {
  return (
    <div className='container results-container'>
      <div className='results-wrapper wrapper'>
          <ResultsHeader currentSearchValue = {currentSearchValue}/>
          
          {
           averagesArray.filter((entry) => {
             if(!(entry.title.toString().toLowerCase().includes(currentSearchValue.toString().toLowerCase()))) {
               return null;
             } else {
               return entry;
             }
           }).map((entry) => (
               <SearchEntries averagesArray={averagesArray} entry={entry} /> 
          ))}
      </div>
      
    </div>
  )
}
 
export default ResultsPage