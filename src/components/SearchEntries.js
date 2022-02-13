import React from 'react'
import Entries from './Entries'



const SearchEntries = ({averagesArray, entry}) => {
    let averageNum = entry.average;
    let repeatedTimes = entry.repeat;
    let averageSum = (averageNum/repeatedTimes).toFixed(1);

  return (
    <div className="search-entries-container">
        <div className="entries table">
            <div className="row vertical">
                 <div className='col1'>
                    <div className="vertical">
                        <h2 className="search-entry-title">{entry.course} {entry.number}</h2>
                        <p><span className="bold">Professor: </span>{entry.prof}</p>
                    </div>
                </div>
                <div className='col2'>
                    <div className="">
                        <div className="average-circle">
                            {averageSum}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchEntries