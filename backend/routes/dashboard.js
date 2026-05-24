const express = require('express');
const router = express.Router();

router.get('/internships', (req, res) => {
  res.json({
    totalInternships: 10,
    completed: 4,
    pendingReviews: 2,
  });
});

module.exports = router;
