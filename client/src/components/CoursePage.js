import React from "react";
import { useParams } from "react-router-dom";
import CoursePageHeader from "./CoursePageHeader";
import Entries from "./Entries";

const CoursePage = ({
  averagesArray,
  entriesArray,
  setIsOpen,
  setFilledForm,
  setCurrentPageName,
  setIsFilledOpen,
  isFilledOpen,
  isOpen,
  difficultyArray,
  courseArray,
  workloadArray,
  profRateArray,
  facultyArray,
  coursesArray,
  filledForm,
  currentPageName,
  setIsSuccessOpen
}) => {
  const { id } = useParams();
  return (
    <React.Fragment>
      {averagesArray
        .filter((entry) => {
          if (
            !entry.average_title
              .toString()
              .toLowerCase()
              .includes(id.toString().toLowerCase())
          ) {
            return null;
          } else {
            return entry;
          }
        })
        .map((entry) => (
          <CoursePageHeader
            id={id}
            courseName={entry.average_name}
            courseNumber={entry.average_number}
            averagesArray={averagesArray}
            entriesArray={entriesArray}
            difficulty={entry.average_difficulty}
            repeat={entry.average_repeat}
            workload={entry.average_workload}
            average={entry.average_avg}
            setIsOpen={setIsOpen}
            setFilledForm={setFilledForm}
            setCurrentPageName={setCurrentPageName}
            setIsFilledOpen={setIsFilledOpen}
            isFilledOpen={isFilledOpen}
            isOpen={isOpen}
            difficultyArray={difficultyArray}
            courseArray={courseArray}
            workloadArray={workloadArray}
            profRateArray={profRateArray}
            facultyArray={facultyArray}
            coursesArray={courseArray}
            filledForm={filledForm}
            currentPageName={currentPageName}
            setIsSuccessOpen={setIsSuccessOpen}
          />
        ))}
      <div className="course-entries-container">
        {entriesArray
          .sort((a, b) => (a.course_time < b.course_time ? 1 : -1))
          .filter((entry) => {
            if (
              !entry.course_title
                .toString()
                .toLowerCase()
                .includes(id.toString().toLowerCase())
            ) {
              return null;
            } else {
              return entry;
            }
          })
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
              grade={entry.course_grade}
              tag1={entry.course_tag1}
              tag2={entry.course_tag2}
              tag3={entry.course_tag3}
              courseLike={entry.course_quality}
              entriesArray={entriesArray}
              averagesArray={averagesArray}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default CoursePage;
