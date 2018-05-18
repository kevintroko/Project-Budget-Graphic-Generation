import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Chart from './components/Chart';

// import ProfilePane from './components/ProfilePane';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    };
  }

  componentWillMount(){
    this.getChartData();
  }

  setData(){
    alert("hello");
  }

  getChartData(){
    // You can do the calls here! like ajax and blablabla
    
    //
      this.setState({
        chartData: {
          labels:['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label:'Workload',
              data: [80.0, 10.0, 10.0, 15.0, 40.0, 55.0, 54.0],
              backgroundColor:'rgba(131, 184, 189, 1.0)',
              hoverBorderColor:'#000'
            },
            {
              label:'Workload 2',
              data: [30.0, 40.0, 50.0, 15.0, 20.0, 59.0, 84.0],
              backgroundColor:'rgba(111, 164, 169, 1.0)',
              hoverBorderColor:'#000'
            },
            {
              label:'Workload',
              data: [30.0, 40.0, 10.0, 10.0, 10.0, 15.0, 22.0],
              backgroundColor:'rgba(91, 144, 149, 1.0)',
              hoverBorderColor:'#000'
            }

          ]
        }
      });
  }

  render() {
      return (
        <div className="App">
          <Navbar/>
          <Chart chartData={this.state.chartData}/>
          {/* <Home/> */}
        </div>
      );
    }
}

export default App;
