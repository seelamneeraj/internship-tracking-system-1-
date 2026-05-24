const express = require("express");
const router = express.Router();

const { getDB } = require("../db");

/* SUBMIT TASK */
router.post("/", (req, res) => {
  try {
    const db = getDB();

    const {
      task_id,
      intern_id,
      submission_text,
    } = req.body;

    if (!task_id || !intern_id || !submission_text) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    /* PREVENT DUPLICATE SUBMISSION */

    const existing = db.exec(`
      SELECT * FROM task_submissions
      WHERE task_id='${task_id}'
      AND intern_id='${intern_id}'
    `);

    if (existing.length > 0) {
      return res.status(400).json({
        message: "Duplicate submission not allowed",
      });
    }

    db.run(`
      INSERT INTO task_submissions
      (task_id, intern_id, submission_text, submitted_at)
      VALUES (
        '${task_id}',
        '${intern_id}',
        '${submission_text}',
        '${new Date().toISOString()}'
      )
    `);

    /* UPDATE TASK STATUS */

    db.run(`
      UPDATE internship_tasks
      SET status='Submitted'
      WHERE id='${task_id}'
    `);

    res.json({
      message: "Task submitted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/* GET SUBMISSIONS */
router.get("/", (req, res) => {
  try {
    const db = getDB();

    const result = db.exec(`
      SELECT * FROM task_submissions
    `);

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;