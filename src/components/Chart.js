import React from 'react';
import ChartDesign from './ChartDesign';

class Chart extends React.Component {
    render() {
      //Budget graph data
      var budgetData = {
        labels:['January', ['February','Current date'], 'March', 'April', ['May','Deadline'], 'June'],
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
      //Profile graph data
      var chartData = {
        labels:['January', 'February', 'March', 'April', 'May', 'June'],
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
