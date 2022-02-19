import React from "react";
import SearchForm from "./SearchForm";

const ResultsHeader = ({ resultsHeader, currentSearchValue }) => {
  return (
    <div className="results-header-container header">
      <h2 class="search-results-header">
        Search results for <span className="bold"> "{currentSearchValue}"</span>
      </h2>
      
    </div>
  );
};

export default ResultsHeader;
