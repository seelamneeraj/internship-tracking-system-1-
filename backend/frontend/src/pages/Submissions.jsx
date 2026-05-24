import { useState } from 'react';
import API from '../services/api';

export default function Submissions() {
  const [formData, setFormData] = useState({
    task_id: '',
    intern_id: '',
    submission_text: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitWork = async () => {
    try {
      await API.post('/submissions', formData);

      alert('Submission successful');

      setFormData({
        task_id: '',
        intern_id: '',
        submission_text: '',
      });
    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <div style={{ padding: '30px', flex: 1 }}>
      <h1>Task Submission</h1>

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
          name="task_id"
          placeholder="Task ID"
          value={formData.task_id}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="intern_id"
          placeholder="Intern ID"
          value={formData.intern_id}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="submission_text"
          placeholder="Submission Details"
          value={formData.submission_text}
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={submitWork} style={buttonStyle}>
          Submit Task
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
