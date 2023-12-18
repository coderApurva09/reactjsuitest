import React, { useState } from 'react';

const AdsInsights = () => {
  const [showDoughnutChart, setShowDoughnutChart] = useState(false);
  const [selectedMatrix, setSelectedMatrix] = useState('');

  const handleToggle = () => {
    setShowDoughnutChart(!showDoughnutChart);
  };

  const handleMatrixChange = (event) => {
    setSelectedMatrix(event.target.value);
  };

  return (
    <div>
      <label>Show Ads Insights:</label>
      <input type="checkbox" id="toggle-insights" onChange={handleToggle} />

      {showDoughnutChart && (
        <div>
          <label>Select Matrix:</label>
          <select id="matrix-dropdown" onChange={handleMatrixChange}>
            <option value="matrix-1">Matrix 1</option>
            <option value="matrix-2">Matrix 2</option>
            {/* Add more matrix options as needed */}
          </select>
          {/* Render the doughnut chart and table based on the selected matrix */}
        </div>
      )}
    </div>
  );
};

export default AdsInsights;
