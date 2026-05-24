import { Link } from 'react-router-dom';

export default function Sidebar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '20px',
    fontSize: '18px',
  };

  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        background: '#1d4ed8',
        color: 'white',
        padding: '20px',
      }}
    >
      <h1 style={{ marginBottom: '40px' }}>Internship Tracker</h1>

      <Link to="/" style={linkStyle}>
        Dashboard
      </Link>

      <Link to="/internships" style={linkStyle}>
        Internships
      </Link>

      <Link to="/tasks" style={linkStyle}>
        Tasks
      </Link>

      <Link to="/submissions" style={linkStyle}>
        Submissions
      </Link>

      <Link to="/evaluations" style={linkStyle}>
        Evaluations
      </Link>

      <Link to="/analytics" style={linkStyle}>
        Analytics
      </Link>
    </div>
  );
}
