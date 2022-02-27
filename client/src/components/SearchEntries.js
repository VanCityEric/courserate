import React from 'react'
import Entries from './Entries'
import { useNavigate } from "react-router-dom";



const SearchEntries = ({averagesArray, entry, searchArray, setSearchName}) => {
    let averageNum = entry.average_avg;
    let repeatedTimes = entry.average_repeat;
    let averageSum = (averageNum/repeatedTimes).toFixed(1);
    let className = 'average-circle';
    if(averageSum < 3) {
        className += ' red';
      } else if (averageSum == 3) {
        className += ' yellow';
      } else if (averageSum > 3) {
        className += ' green';
      }

const navigate = useNavigate();
const searchClickHandler = (e) => {
    e.preventDefault();
    navigate(`/course/${(entry.average_title)}`);
}

  return (
    <div className="search-entries-container" onClick={(e) => searchClickHandler(e)} >
        <div className="entries table">
            <div className="row vertical">
                <div className='col2'>
                    <div className="">
                        <div className={className}>
                            {averageSum}
                        </div>
                        <p class="num-of-ratings">{entry.average_repeat} review(s)</p>
                    </div>
                </div>
                 <div className='col1'>
                    <div className="vertical">
                        <h2 className="search-entry-title">{entry.average_name} {entry.average_number}</h2>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default SearchEntries