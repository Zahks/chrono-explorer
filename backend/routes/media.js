// backend/routes/media.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// 📥 Récupérer tous les médias liés à un événement
router.get('/:eventId', (req, res) => {
  const sql = 'SELECT * FROM media WHERE eventId = ?';
  db.query(sql, [req.params.eventId], (err, results) => {
    if (err) {
      console.error('❌ Erreur récupération médias :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

module.exports = router;
