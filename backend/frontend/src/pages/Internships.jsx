import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Internships() {
  const [internships, setInternships] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    domain: '',
    mentor_id: '',
  });

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const res = await API.get('/internships');

      const data =
        res.data[0]?.values?.map((row) => ({
          id: row[0],
          title: row[1],
          domain: row[2],
          mentor_id: row[3],
          status: row[4],
        })) || [];

      setInternships(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createInternship = async () => {
    try {
      await API.post('/internships', formData);

      alert('Internship created');

      setFormData({
        title: '',
        domain: '',
        mentor_id: '',
      });

      fetchInternships();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: '30px', flex: 1 }}>
      <h1>Internship Management</h1>

      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          marginBottom: '30px',
          width: '400px',
        }}
      >
        <h2>Create Internship</h2>

        <input
          type="text"
          name="title"
          placeholder="Internship Title"
          value={formData.title}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="domain"
          placeholder="Domain"
          value={formData.domain}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="mentor_id"
          placeholder="Mentor ID"
          value={formData.mentor_id}
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={createInternship} style={buttonStyle}>
          Create Internship
        </button>
      </div>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: '100%',
          background: 'white',
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Domain</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {internships.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.domain}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
};

const buttonStyle = {
  background: '#1d4ed8',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
};
