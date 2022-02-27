import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultsHeader from "./ResultsHeader";
import SearchEntries from "./SearchEntries";
import { useHistory } from "react-router";
import SearchForm from "./SearchForm";

const ResultsPage = ({
  dashboardHeader,
  resultsHeader,
  currentSearchValue,
  entriesArray,
  averagesArray,
  searchArray,
  setSearchName,
  searchName,
  setCurrentSearchValue
}) => {
  const { id } = useParams();

  document.title = `Search results for ${id.toString().toUpperCase()}`;

  return (
    <div className="container results-container">
      <div className="results-wrapper wrapper">
        <ResultsHeader currentSearchValue={id} />
        <SearchForm
          averagesArray={averagesArray}
          searchArray={searchArray}
          currentSearchValue={currentSearchValue}
          setCurrentSearchValue={setCurrentSearchValue}
          setSearchName={setSearchName}
          searchName={searchName}
        />

        {averagesArray
          .sort((a, b) => (a.average_title > b.average_title? 1 : -1))
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
            <SearchEntries averagesArray={averagesArray} entry={entry} />
          ))}
      </div>
    </div>
  );
};

export default ResultsPage;
