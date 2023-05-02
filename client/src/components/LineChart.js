import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  elements,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 function LineChart(props) {
  let results = props.props.filter(function(item) {
    return item.testName == `${props.testName}`
  });
  const labels = results.map(function(el){
    return new Date( el.date ).toLocaleString()
})
const trueAnswer = results.map(function(el){
  return el.mistakes
})
  const options = {
    plugins: {
      title: {
        display: true,
        text: props.title,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'правильных ответов',
        data: trueAnswer,
        pointRadius: 1,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'неправильных ответов',
        
        data: results.map(function(el){return el.size - el.mistakes}),
        pointRadius: 0,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default LineChart;