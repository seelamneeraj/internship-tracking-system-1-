import { useState } from 'react';
import API from '../services/api';

export default function Tasks() {
  const [formData, setFormData] = useState({
    internship_id: '',
    milestone: '',
    description: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitTask = async () => {
    try {
      await API.post('/tasks', formData);

      alert('Task assigned successfully');

      setFormData({
        internship_id: '',
        milestone: '',
        description: '',
        deadline: '',
      });
    } catch (err) {
      console.log(err);
      alert('Error assigning task');
    }
  };

  return (
    <div style={{ padding: '30px', flex: 1 }}>
      <h1>Assign Internship Task</h1>

      <div
        style={{
          background: 'white',
          padding: '20px',
          marginTop: '20px',
          borderRadius: '10px',
          width: '400px',
        }}
      >
        <input
          type="text"
          name="internship_id"
          placeholder="Internship ID"
          value={formData.internship_id}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="milestone"
          placeholder="Milestone"
          value={formData.milestone}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={submitTask} style={buttonStyle}>
          Assign Task
        </button>
      </div>
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
