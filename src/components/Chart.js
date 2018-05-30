import React from 'react';
import ChartDesign from './ChartDesign';

//months defined in here.
const months_profile = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
//Create date for the year.
var date = new Date();
//Year is returned as 118 not as 2018, so it must be parse into int
var year = date.getYear().toString();
year = year.substring(1);
parseInt(year,0);
//Gets the current month
var month = date.getMonth();
//Initial month for the budget graph 0=January... 5=January... 11=December
var initial_month=1;
var deadline_month=6;
// var deadline_year=19;
//Define the color array for painting the graph deadlines
var colors_line=[];

class Chart extends React.Component {
    render() {
      //Budget graph data
      for (var i = 0, graphMonth_Budget=[]; i < 12+initial_month; i++) {
        graphMonth_Budget[i-initial_month]=((i%12)+1)+"/"+year;
        //Adds a year every time month is December
        if(i===11) year++;
        //Fills gray if normal behaviour
        colors_line[i]='rgba(235, 235, 235, 1.0)';
        //Colors the current month
        if(i===month){
          graphMonth_Budget[i-initial_month]= 'current date';
          colors_line[i]='rgba(255, 0, 0, 1.0)';
        } //Colors the deadline month
        if(i===deadline_month){
          graphMonth_Budget[i-initial_month]= 'deadline';
          colors_line[i]='red';
        }
      }
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
          }
        ]
      };

      //For used to sort the month circularly, may be on a function to be more optimized
      for (var j = 0, graphMonth=[], len=months_profile.length; j < len; j++) {
              graphMonth[j]=months_profile[(j+this.props.startDate)%len];
      }
      var chartData = {
        labels: graphMonth,
        datasets: [
          {
            label:'Project 1',
            data: this.props.data,
            backgroundColor:'rgba(131, 184, 189, 1.0)',
            hoverBorderColor:'#000',
            hidden: false
          },
          {
            label:'Project 2',
            data: this.props.data,
            backgroundColor:'rgba(111, 164, 169, 1.0)',
            hoverBorderColor:'#000',
            hidden: false
          },
          {
            label:'Project 3',
            data: this.props.data,
            backgroundColor:'rgba(91, 144, 149, 1.0)',
            hoverBorderColor:'#000',
            hidden: false
          }
        ]
      };

      if(this.props.type==='profile'){
        return (
            <div>
              <ChartDesign chartData={chartData} kind={'profile'}/>
            </div>
        );
      } else if (this.props.type==='budget'){
        var quotedAndCommaSeparated = "'" + colors_line.join("','") + "'";
         return(
           <div>
             <ChartDesign chartData={budgetData} kind={'budget'} legendPosition="right" colors_line={quotedAndCommaSeparated}/>
           </div>
         );
      }
    }
}

export default Chart;
