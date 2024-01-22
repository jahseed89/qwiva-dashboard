'use client';

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface ChartDataset {
  label: string;
  data: string[];
  backgroundColor: string;
  barThickness: number;
  borderRadius: number;
  borderSkipped: boolean

}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);


const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '',
          data: ['13', '06', '03', '15', '9', '05', '03'],
          backgroundColor: '#E5ECF7',
          barThickness: 10,
          borderRadius: 10,
          borderSkipped: false

        },
        // {
        //   label: '',
        //   data: [''],
        //   backgroundColor: '',
        //   barThickness: 0,
        //   borderRadius: 0,
        // },
        {
          label: '',
          data: ['20', '20', '10', '15', '20', '25', '30'],
          backgroundColor: '#4C6FFF',
          barThickness: 10,
          borderRadius: 10,
          borderSkipped: false

        },
        // {
        //   label: '',
        //   data: [''],
        //   backgroundColor: '',
        //   barThickness: 0,
        //   borderRadius: 0,
        // },
        {
          label: '',
          data: ['16', '9', '04', '15', '17', '20', '15'],
          backgroundColor: '#FF92AE',
          barThickness: 10,
          borderRadius: 10,
          borderSkipped: false

        },
      ],
    })
    setChartOptions({
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: '',
        },
        header: {
          display: true,
          content: 'Custom Header Content',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
            borderDash: [5, 5],
          },
        },
      },
    })
  }, [])

  return (
    <div className="bg-white-100 w-full px-2 py-1 md:col-span-2 h-[50vh] m-auto border rounded-lg">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
