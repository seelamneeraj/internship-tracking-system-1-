import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Analytics() {
  const [stats, setStats] = useState({
    internships: 0,
    tasks: 0,
    submissions: 0,
    evaluations: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const internships = await API.get('/internships');

      const tasks = await API.get('/tasks');

      const submissions = await API.get('/submissions');

      const evaluations = await API.get('/evaluations');

      setStats({
        internships: internships.data[0]?.values?.length || 0,

        tasks: tasks.data[0]?.values?.length || 0,

        submissions: submissions.data[0]?.values?.length || 0,

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
    width: '220px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{ padding: '30px', flex: 1 }}>
      <h1>Analytics Dashboard</h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '30px',
          flexWrap: 'wrap',
        }}
      >
        <div style={cardStyle}>
          <h3>Total Internships</h3>
          <p style={{ fontSize: '35px' }}>{stats.internships}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Tasks</h3>
          <p style={{ fontSize: '35px' }}>{stats.tasks}</p>
        </div>

        <div style={cardStyle}>
          <h3>Submissions</h3>
          <p style={{ fontSize: '35px' }}>{stats.submissions}</p>
        </div>

        <div style={cardStyle}>
          <h3>Evaluations</h3>
          <p style={{ fontSize: '35px' }}>{stats.evaluations}</p>
        </div>
      </div>

      <div
        style={{
          background: 'white',
          marginTop: '40px',
          padding: '25px',
          borderRadius: '10px',
        }}
      >
        <h2>Performance Summary</h2>

        <p>
          Internship tasks are being tracked efficiently across mentors and
          interns.
        </p>

        <p>
          Submission workflows and mentor evaluations are functioning properly.
        </p>

        <p>
          The system prevents duplicate milestone submissions and maintains
          internship progress history.
        </p>
      </div>
    </div>
  );
}
