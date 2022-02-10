import React from 'react'
import DashboardHeader from './DashboardHeader'
import SearchForm from './SearchForm'
import Entries from './Entries'

const Dashboard = ({dashboardHeader}) => {
  return (
    <React.Fragment>
       <div className="dashboard-container">
          <div className="dashboard-wrapper">
            <DashboardHeader dashboardHeader={dashboardHeader}/>
            <SearchForm />
            <div className="recent-container">
              <h2 className="recent-text">Recent Reviews</h2>
              <div className="recent-entries-container">
                <Entries />
                <Entries />
                <Entries />
                <Entries />
                <Entries />
                <Entries />
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  
  )
}

export default Dashboard