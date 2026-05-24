const express = require('express');
const router = express.Router();

const { getDB } = require('../db');

/* ADD EVALUATION */
router.post('/', (req, res) => {
  try {
    const db = getDB();

    const { internship_id, mentor_id, rating, feedback } = req.body;

    if (!internship_id || !mentor_id || !rating) {
      return res.status(400).json({
        message: 'Required fields missing',
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        message: 'Rating should be between 1 and 5',
      });
    }

    db.run(`
      INSERT INTO evaluations
      (internship_id, mentor_id, rating, feedback)
      VALUES (
        '${internship_id}',
        '${mentor_id}',
        '${rating}',
        '${feedback || ''}'
      )
    `);

    res.json({
      message: 'Evaluation added',
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/* GET EVALUATIONS */
router.get('/', (req, res) => {
  try {
    const db = getDB();

    const result = db.exec(`
      SELECT * FROM evaluations
    `);

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
