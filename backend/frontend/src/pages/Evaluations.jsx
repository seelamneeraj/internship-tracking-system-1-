import { useState } from 'react';
import API from '../services/api';

export default function Evaluations() {
  const [formData, setFormData] = useState({
    internship_id: '',
    mentor_id: '',
    rating: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitEvaluation = async () => {
    try {
      await API.post('/evaluations', formData);

      alert('Evaluation submitted');

      setFormData({
        internship_id: '',
        mentor_id: '',
        rating: '',
        feedback: '',
      });
    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || 'Evaluation failed');
    }
  };

  return (
    <div style={{ padding: '30px', flex: 1 }}>
      <h1>Mentor Evaluation</h1>

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
          name="mentor_id"
          placeholder="Mentor ID"
          value={formData.mentor_id}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="feedback"
          placeholder="Feedback"
          value={formData.feedback}
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={submitEvaluation} style={buttonStyle}>
          Submit Evaluation
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
