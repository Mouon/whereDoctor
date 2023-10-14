const express = require('express');
const router = express.Router();
const data = require('../db'); // Import the data from db.js

router.get('/announcements', (req, res) => {
  try {
    res.json({ announcements: data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
