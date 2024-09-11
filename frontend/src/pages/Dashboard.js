import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { getHabits } from '../api/habitAPI';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        history.push('/login'); // Redirect to login if no token
      } else {
        // Fetch habits
        axios
          .get('http://localhost:5000/api/habits', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setHabits(response.data);
          })
          .catch((error) => {
            console.error('Error fetching habits', error);
          });
      }
  }, [history]);

  return (
    <div className="dashboard">
      <h1>Your Habits</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
