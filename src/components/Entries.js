import React from 'react'

const Entries = () => {
  return (
    <div className="recent-entries">
        <h2>MACM 201</h2>
        <p>Jamie Mulholland</p><br/>
        <p><span className="bold">Reviewer's Major: </span>Applied Sciences</p>
        <br/>
        <p className="bold">Comment:</p>
        <p>This class is no joke. All of the assignments may take you over 2 weeks to complete as they are very complex. Exams are killer and will probably make you cry. Concepts are difficult.</p>

        <br /><br />
        <div className="row">
            <div className="col1 col"><p><span className="bold">Difficulty: </span> Very hard </p></div>
            <div className="col2 col"><p><span className="bold">Workload: </span>Heavy</p></div>
            <div className="col3 col"><p><span className="bold">Professor rating: </span>2 stars</p></div>
            <div className="col3 col"><p><span className="bold">Did you like the course?: </span>Yes</p></div>
        </div>
    </div>
  )
}

export default Entries