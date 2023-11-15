import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LikesVsPostsChart = ({ userData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (userData && userData.length > 0) {
      const totalPosts = userData.length;
      let totalLikes = 0;

      userData.forEach((blog) => {
        totalLikes += blog.likes.length;
      });

      const data = {
        labels: ['Posts', 'Likes'],
        datasets: [
          {
            label: 'Likes vs Posts',
            data: [totalPosts, totalLikes],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      };

      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance if exists
      }

      if (chartContainer && chartContainer.current) {
        const ctx = chartContainer.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
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
    <div className="likes-vs-posts-chart-container">
      <h2>Likes vs Posts</h2>
      <canvas ref={chartContainer} width="400" height="200"></canvas>
    </div>
  );
};

export default LikesVsPostsChart;
