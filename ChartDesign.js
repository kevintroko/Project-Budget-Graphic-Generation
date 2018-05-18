import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'right',

  }
  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={30}
          options={{
            responsive: true,
            title:{
              display:this.props.displayTitle,
              // text:'Workload',
              fontSize:25
            },
            tooltips: {
              mode: 'index',
              intersect: false,
              enabled:true
            },
            legend:{
              display: this.props.displayLegend,
              position:this.props.legendPosition,
              labels:{ fontColor:'#000'}
            },
            layout:{
              padding:{ left:50, right:0, bottom:0, top:0 }
            },
            scales: {
              xAxes: [{
  							stacked: true,
  						}],
             yAxes: [{
               stacked: true,
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
