import React from 'react';
import ChartDesign from './ChartDesign';


//months defined in here.
const months_profile = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
//Create date for the year.
var date = new Date();
//Year is returned as 118 not as 2018, so it must be parse into int
var year = date.getYear().toString().substring(1);
parseInt(year,0);
//Gets the current month
var month = date.getMonth();

// var deadline_year=19;
//Define for color of the graph components
let redA, greenA, blueA, colors1;
let newDataset;
//Sum for the counter
let k = 0;
//Function to get the random colors of the chart
function getRandomColor() {
  redA   = Math.floor((Math.random() * 127) + 50);
  greenA = Math.floor((Math.random() * 127) + 127);
  blueA = Math.floor((Math.random() * 127) + 127);
}

class Chart extends React.Component {
    render() {
      //Initial month for the budget graph 0=January... 5=January... 11=December
      let initial_month =this.props.startDate.getMonth();
      let deadline_month = this.props.endDate.getMonth();
      if(this.props.endDate.getYear()-this.props.startDate.getYear()>0){
        deadline_month+=12;
      }
      let time = deadline_month-initial_month;
      let arrayOfData = this.props.data;
      if(time<=12){
        for (var i = 0, graphMonth_Budget=[]; i < 12+initial_month; i++) {
          graphMonth_Budget[i-initial_month]=((i%12)+1)+"/"+(year);
          //Adds a year every time month is December
          if(i===11) year++;
          //Colors the current month
          if(i===month){
            graphMonth_Budget[i-initial_month]= 'current date';
          } //Colors the deadline month
          if(i===deadline_month){
            graphMonth_Budget[i-initial_month]= 'deadline';
          }
        }
      // }else {
      //   for (let i = 0, graphMonth_Budget=[]; i < time+initial_month; i++) {
      //     graphMonth_Budget[i-initial_month]=((i%12)+1)+"/"+(year);
      //     //Adds a year every time month is December
      //     if(i===11) year++;
      //     //Colors the current month
      //     if(i===month){
      //       graphMonth_Budget[i-initial_month]= 'current date';
      //     } //Colors the deadline month
      //     if(i===deadline_month){
      //       graphMonth_Budget[i-initial_month]= 'deadline';
      //     }
      //   }
      }

      //Data for the budget graph
      var budgetData = {
        labels: graphMonth_Budget,
        datasets: [
          {
            label:'Year 2018',
            lineTension: 0,
            data: this.props.data,
            backgroundColor:'rgba(131, 184, 189, 1.0)',
            borderColor:'rgba(131, 184, 189, 1.0)',
            fill: false
          },
          {
            label:'Year 2018',
            lineTension: 0,
            data: this.props.averageLine,
            backgroundColor:'red',
            borderColor:'red',
            fill: false
          }
        ]
      };


      //For used to sort the month circularly, may be on a function to be more optimized
      for (var j = 0, graphMonth=[], len=months_profile.length; j < len; j++) {
              graphMonth[j]=months_profile[(j+this.props.startDate)%len];
      }

      var chartData = { labels: graphMonth, datasets: []};
        for (k = 0; k < arrayOfData.length-1; k++) {
            getRandomColor();
            colors1 = 'rgba('+redA+','+greenA+','+blueA+',1.0)';
            newDataset = {
            label:'Project '+(k+1),
            data: arrayOfData[k],
            backgroundColor: colors1,
            hoverBorderColor:'#000',
            hidden: false
          }
          // You add the newly created dataset to the list of `data`
          chartData.datasets.push(newDataset);
        }
        colors1 = 'rgba(215,226,228,1.0)';
        newDataset = {
        label:'Teaching',
        data: arrayOfData[arrayOfData.length-1],
        backgroundColor: colors1,
        hoverBorderColor:'#000',
        hidden: false
      }
      // You add the newly created dataset to the list of `data`
      chartData.datasets.push(newDataset);

      if(this.props.type==='profile'){
        return (
            <div>
              <ChartDesign chartData={chartData} kind={'profile'}/>
            </div>
        );
      } else if (this.props.type==='budget'){
         return(
           <div>
             <ChartDesign chartData={budgetData} kind={'budget'} legendPosition="right"/>
           </div>
         );
      }
    }
}

export default Chart;
