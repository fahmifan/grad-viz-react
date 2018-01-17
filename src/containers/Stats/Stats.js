import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

class Stats extends Component {
  
  state = {
    chartData: {
      labels: ['w0', 'w1','w2', 'w3', 'w4'],
      datasets: [{
        data: [0, 80, 65, 100, 85],
        borderWidth: 3,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgb(64,139,201)',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }] 
    },
    options: {
      maintainAspectRatio: true,
      title: {
        display: true,
        text: 'Weekly Math Quiz Grade',
        fontSize: 25
      },
      legend: {
        display: false,
        position: 'right',
        labels: {
          fontColor: '#000'
        }
      },
      layout: {
        padding: {
          left: 50,
          right: 50,
          bottom: 0,
          top: 0
        }
      },
      tooltips: {
        enabled: true
      }
    }
  }

  componentDidMount() {
    this.updateChartData();
  }

  getLabelsArray = () => this.props.quizes.map(quiz => quiz.quiz_title);

  getNilaiArray = () => this.props.quizes.map(quiz => parseFloat(quiz.value));

  updateChartData = () => {
    const labelArr = (this.getLabelsArray());
    labelArr.splice(0,0,'0');

    const nilaiArr = (this.getNilaiArray());
    nilaiArr.splice(0,0,0)

    const newChartData = {
      ...this.state.chartData,
      labels: labelArr,
      datasets: [{
        ...this.state.chartData.datasets[0],
        data: nilaiArr
      }]
    };

    this.setState({
      chartData: newChartData
    })
  } 

  render() {
    return (
      <div className="vh-100 w-70 mt5 pt2 center">
        <Line 
          data={this.state.chartData}
          options={this.state.options}
          width={700}
          height={400}
        />
      </div>
    );
  }
}

const mapStateToProps = state  => {
  return {
    quizes: state.quizes
  }
}

export default connect(mapStateToProps)(Stats);