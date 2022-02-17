import React from 'react'
import DashboardHeader from './DashboardHeader'
import SearchForm from './SearchForm'
import Entries from './Entries'

const Dashboard = ({dashboardHeader, entriesArray, averagesArray, searchArray, setDashboardHeader, setResultsHeader, currentSearchValue, searchName, setSearchName, setCurrentSearchValue}) => {

  return (
    <React.Fragment>
       <div className="dashboard-container container">
          <div className="dashboard-wrapper wrapper">
            <DashboardHeader dashboardHeader={dashboardHeader}/>
            <SearchForm 
              averagesArray={averagesArray}
              searchArray={searchArray}  
              setDashboardHeader = {setDashboardHeader}  
              setResultsHeader={setResultsHeader}
              currentSearchValue={currentSearchValue}
              setCurrentSearchValue={setCurrentSearchValue}
              setSearchName={setSearchName}
              searchName={searchName}
              />
            <div className="recent-container">
              <h2 className="recent-text">Recent Reviews</h2>
              <div className="recent-entries-container">
                {entriesArray.map((entry) => (
                  <Entries 
                    courseName={entry.course} 
                    courseNumber={entry.number}         
                    professor={entry.prof}
                    difficulty={entry.diff}
                    workload={entry.work}
                    profRating={entry.rateprof}
                    comments={entry.comment}
                    faculty={entry.fac}
                    courseLike={entry.like}
                    entriesArray={entriesArray}
                    averagesArray={averagesArray}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  
  )
}

export default Dashboard