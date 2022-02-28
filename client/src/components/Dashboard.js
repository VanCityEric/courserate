import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import SearchForm from "./SearchForm";
import Entries from "./Entries";
import Tags from "./Tags";

const Dashboard = ({
  dashboardHeader,
  entriesArray,
  averagesArray,
  searchArray,
  setResultsHeader,
  setEntriesArray,
  currentSearchValue,
  searchName,
  setSearchName,
  setCurrentSearchValue,

}) => {
  return (
    <React.Fragment>
      <div className="dashboard-container container">
        <div className="dashboard-wrapper wrapper">
          <DashboardHeader dashboardHeader={dashboardHeader} />
          <SearchForm
            averagesArray={averagesArray}
            searchArray={searchArray}
            setResultsHeader={setResultsHeader}
            currentSearchValue={currentSearchValue}
            setCurrentSearchValue={setCurrentSearchValue}
            setSearchName={setSearchName}
            searchName={searchName}
          />
          <div className="recent-container">
            <h2 className="recent-text">Recent Reviews</h2>
            <div className="recent-entries-container">
              {entriesArray
                .sort((a, b) => (a.course_time < b.course_time ? 1 : -1))
                .map((entry) => (
                  <Entries
                    courseName={entry.course_name}
                    courseNumber={entry.course_number}
                    professor={entry.course_prof}
                    difficulty={entry.course_difficulty}
                    workload={entry.course_workload}
                    profRating={entry.course_prof_rating}
                    comments={entry.course_comment}
                    faculty={entry.course_faculty}
                    day={entry.course_day}
                    month={entry.course_month}
                    year={entry.course_year}
                    time={entry.course_time}
                    title={entry.course_title}
                    courseLike={entry.course_quality}
                    grade={entry.course_grade}
                    tag1={entry.course_tag1}
                    tag2={entry.course_tag2}
                    tag3={entry.course_tag3}
                    entriesArray={entriesArray}
                    averagesArray={averagesArray}
                    thumbsUp={entry.course_thumbs_up}
                    thumbsDown={entry.course_thumbs_down}
                    courseId={entry.entry_id}
              
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
