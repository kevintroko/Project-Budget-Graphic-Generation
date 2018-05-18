import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class ChartDesign extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'bottom',
  }
  render(){
    if(this.props.kind==='profile'){
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            // width={100}
            // height={30}
            options={{
              responsive: true,
              title:{
                display:this.props.displayTitle,
                text:'Profile Graph',
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
                padding:{ left:50, right:0, bottom:0, top:10 }
              },
              scales: {
                xAxes: [{  stacked: true, }],
                yAxes: [{  display: true,
                           stacked: true,
                           ticks: {
                             suggestedMin: 0,
                             max: 100,
                             stepSize: 20,
                             // maxTicksLimit: 5
                           }
                        }]
                }
            }}
          />
        </div>
      )
    }else {
      return(
        <div className="chart">
          <Line
            data={this.state.chartData}
            options={{
              responsive: true,
              title:{
                display:this.props.displayTitle,
                text:'Budget Graph',
                fontSize:25,
                fill: false
              },
              legend:{
                display: this.props.displayLegend,
                position:this.props.legendPosition,
                labels:{ fontColor:'#000'}
              },
              layout:{
                padding:{ left:0, right:0, bottom:0, top:0 }
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    color: ['gray', 'red', 'gray', 'gray', 'red', 'gray']
                  },
                }],
                yAxes: [{
                        ticks: {
                        suggestedMin: 0,
                        max: 50,
                        stepSize: 10,
                        // maxTicksLimit: 5
                    }
                 }]
                }
            }}
          />
        </div>
      )
    }
  }
}

export default ChartDesign;
