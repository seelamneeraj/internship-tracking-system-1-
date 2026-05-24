const express = require('express');
const router = express.Router();

const { getDB } = require('../db');

/* CREATE INTERNSHIP */
router.post('/', (req, res) => {
  try {
    const db = getDB();

    const { title, domain, mentor_id, status } = req.body;

    if (!title || !domain) {
      return res.status(400).json({
        message: 'Title and domain required',
      });
    }

    db.run(`
      INSERT INTO internships 
      (title, domain, mentor_id, status)
      VALUES (
        '${title}',
        '${domain}',
        '${mentor_id || ''}',
        '${status || 'Assigned'}'
      )
    `);

    res.json({
      message: 'Internship created successfully',
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/* GET ALL INTERNSHIPS */
router.get('/', (req, res) => {
  try {
    const db = getDB();

    const result = db.exec('SELECT * FROM internships');

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
