import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    internships: 0,
    tasks: 0,
    evaluations: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const internships = await API.get('/internships');

      const tasks = await API.get('/tasks');

      const evaluations = await API.get('/evaluations');

      setStats({
        internships: internships.data[0]?.values?.length || 0,

        tasks: tasks.data[0]?.values?.length || 0,

        evaluations: evaluations.data[0]?.values?.length || 0,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const cardStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{ padding: '30px', flex: 1 }}>
      <h1>Internship Dashboard</h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        <div style={cardStyle}>
          <h2>Total Internships</h2>

          <p style={{ fontSize: '40px' }}>{stats.internships}</p>
        </div>

        <div style={cardStyle}>
          <h2>Total Tasks</h2>

          <p style={{ fontSize: '40px' }}>{stats.tasks}</p>
        </div>

        <div style={cardStyle}>
          <h2>Evaluations</h2>

          <p style={{ fontSize: '40px' }}>{stats.evaluations}</p>
        </div>
      </div>

      <div
        style={{
          background: 'white',
          marginTop: '40px',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h2>Internship Progress Overview</h2>

        <p>Internship workflows are being tracked successfully.</p>

        <p>Mentors can assign tasks and review submissions.</p>

        <p>Interns can submit milestone updates and reports.</p>
      </div>
    </div>
  );
}
