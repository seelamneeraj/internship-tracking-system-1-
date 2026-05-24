const express = require('express');
const router = express.Router();

const { getDB } = require('../db');

/* CREATE TASK */
router.post('/', (req, res) => {
  try {
    const db = getDB();

    const { internship_id, milestone, description, deadline, status } =
      req.body;

    if (!internship_id || !milestone || !deadline) {
      return res.status(400).json({
        message: 'Required fields missing',
      });
    }

    db.run(`
      INSERT INTO internship_tasks
      (internship_id, milestone, description, deadline, status)
      VALUES (
        '${internship_id}',
        '${milestone}',
        '${description || ''}',
        '${deadline}',
        '${status || 'Assigned'}'
      )
    `);

    res.json({
      message: 'Task assigned successfully',
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/* GET ALL TASKS */
router.get('/', (req, res) => {
  try {
    const db = getDB();

    const result = db.exec(`
      SELECT * FROM internship_tasks
    `);

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

/* UPDATE TASK STATUS */
router.put('/:id/status', (req, res) => {
  try {
    const db = getDB();

    const { status } = req.body;

    const taskId = req.params.id;

    const validStatuses = [
      'Assigned',
      'In Progress',
      'Submitted',
      'Reviewed',
      'Completed',
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: 'Invalid status',
      });
    }

    db.run(`
      UPDATE internship_tasks
      SET status='${status}'
      WHERE id='${taskId}'
    `);

    res.json({
      message: 'Task status updated',
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
