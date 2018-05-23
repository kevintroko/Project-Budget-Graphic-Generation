import React from 'react';
import ChartDesign from './ChartDesign';

//months defined in here.
const months_profile = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
//Create date for the year.
var date = new Date();
var year = date.getYear().toString();
//Year is returned as 118 not as 2018
year = year.substring(1);
parseInt(year);

class Chart extends React.Component {
    render() {
      //Budget graph data
      for (var i = 0, graphMonth=[]; i < 12; i++) {
        graphMonth[i]=((i%12)+1)+"/"+year;
        //Adds a year
        if(i===12){
          year++;
        }
      }
      var budgetData = {
        // labels:['January', ['February','Current date'], 'March', 'April', ['May','Deadline'], 'June'],
        labels: graphMonth,
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
      for (var i = 0, graphMonth=[], len=months_profile.length; i < len; i++) {
              graphMonth[i]=months_profile[(i+this.props.startDate)%len];
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
            data: [30.0, 40.0, 50.0, 15.0, 20.0, 59.0, 84.0],
            backgroundColor:'rgba(111, 164, 169, 1.0)',
            hoverBorderColor:'#000',
            hidden: false
          },
          {
            label:'Project 3',
            data: [30.0, 40.0, 10.0, 10.0, 10.0, 15.0, 22.0],
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
         return(
           <div>
             <ChartDesign chartData={budgetData} kind={'budget'} legendPosition="right"/>
           </div>
         );
      }
    }
}

export default Chart;
