import React, { Component } from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

class Stats extends Component {
  
  state = {
    chartData: {
        labels: ['w0', 'w1','w2', 'w3', 'w4'],
        datasets: [{
          label: 'Math',
          data: [0, 80, 65, 100, 85],
          // backgroundColor: 'green'
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth: 1,
          borderColor: '#777',
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

  render() {
    return (
      <div className="vh-100 w-70 mt5 pt2 center">
        <Bar 
          data={this.state.chartData}
          options={this.state.options}
          width={700}
          height={400}
        />
      </div>
    );
  }
}

export default Stats;