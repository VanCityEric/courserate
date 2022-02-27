import React from "react";

const DashboardHeader = ({ dashboardHeader }) => {
  return (
    <div className="dashboard-header header">
      <div className="section-wrapper">
        <h2>{dashboardHeader}</h2>
        <p>
          Browse reviews for your university courses or submit your own review to help other students choose the right course for them.
        </p>
        <br /><br />
        <form>
          <label className="bold"> Select your university:</label>
          <br />
          <div className="select-wrapper"><select className="select-university">
            <option>Simon Fraser University</option>
            <option>Other universities coming soon...</option>
          </select></div>
        </form>
        <br />
      </div>
    </div>
  );
};

export default DashboardHeader;
