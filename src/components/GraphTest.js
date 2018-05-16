import React from 'react';
// import '../css/Home.css';
// npm install --save react-chartjs
// npm install --save chart.js@^1.1.1 react react-dom
var LineChart = require("react-chartjs").Line;

var MyComponent = React.createClass({
  render: function() {
    return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
  }
});
