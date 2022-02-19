import React from "react";

const DashboardHeader = ({ dashboardHeader }) => {
  return (
    <div className="dashboard-header header">
      <div className="section-wrapper">
        <h2>{dashboardHeader}</h2>
        <p>
          Lorem ipsum dolor sit amet. Id alias optio aut cupiditate accusamus
          eos nulla praesentium. Sed molestias laborum et corrupti nisi et
          suscipit tenetur non corrupti nemo. Sed nihil voluptates aut nisi
          voluptatum qui distinctio facere in ipsum saepe. Ut quia voluptatem ut
          eaque.
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
