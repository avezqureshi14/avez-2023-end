import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ userData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (userData && userData.length > 0) {
      const postsPerDay = [0, 0, 0, 0, 0, 0, 0]; // Initialize array for posts per day (Monday to Sunday)

      userData.forEach((blog) => {
        const postDate = new Date(blog.createdAt);
        const dayOfWeek = postDate.getDay(); // Get the day of the week (0 to 6)

        postsPerDay[dayOfWeek]++;
      });

      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance if exists
      }

      if (chartContainer && chartContainer.current) {
        const ctx = chartContainer.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
              label: 'Posts per Day',
              data: postsPerDay,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Destroy chart instance on unmount
        }
      };
    }
  }, [userData]);

  return (
    <div className="line-chart-container">
      <h2>Posts per Day</h2>
      <canvas ref={chartContainer} width="400" height="200"></canvas>
    </div>
  );
};

export default LineChart;
