import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels:['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label:'Workload',
            data: [80.0, 10.0, 10.0, 15.0, 40.0, 55.0, 54.0],
            backgroundColor:'rgba(131, 184, 189, 1.0)',
            hoverBorderColor:'#000'
          }
        ]
      }
    }
  }
  render(){
    return (
      <div className="chart">
        <Bar
        	data={this.state.chartData}
        	// width={100}
        	// height={50}
        	options={{
            title:{
              display:false,
              // text:'Workload',
              fontSize:25
            },
            legend:{
              display:false,
              position:'right',
              labels:{
                fontColor:'#000'
              }
            },
            layout:{
              padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
              }
            },
            tooltips:{
              enabled:true
            },
            scales: {
             yAxes: [{
               // stacked: true,
                ticks: {
                   stepSize: 25,
                   maxTicksLimit: 5
                }
             }]
          }
        	}}
        />
      </div>
    )
  }
}

export default Chart;
