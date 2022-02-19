import React from "react";
import { useParams } from "react-router-dom";
import CoursePageHeader from "./CoursePageHeader";
import Entries from "./Entries";

const CoursePage = ({
  averagesArray,
  entriesArray,
  courseName,
  courseNumber,
  difficulty,
  searchArray
}) => {
  const { id } = useParams();
  return (
    <React.Fragment>
      {averagesArray
        .sort((a, b) => (a.time < b.time ? 1 : -1))
        .filter((entry) => {
          if (
            !entry.title
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
            averagesArray={averagesArray}
            entriesArray={entriesArray}
            difficulty={entry.difficulty}
            repeat={entry.repeat}
            workload={entry.workload}
          />
        ))}
      {entriesArray
        .sort((a, b) => (a.time < b.time ? 1 : -1))
        .filter((entry) => {
          if (
            !entry.title
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
            courseName={entry.course}
            courseNumber={entry.number}
            professor={entry.prof}
            difficulty={entry.diff}
            workload={entry.work}
            profRating={entry.rateprof}
            comments={entry.comment}
            faculty={entry.fac}
            day={entry.day}
            month={entry.month}
            year={entry.year}
            time={entry.time}
            title={entry.title}
            courseLike={entry.like}
            entriesArray={entriesArray}
            averagesArray={averagesArray}
          />
        ))}
    </React.Fragment>
  );
};

export default CoursePage;
