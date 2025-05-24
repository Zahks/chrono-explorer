const express = require('express');
const router = express.Router();
const db = require('../db');

// 🔁 Obtenir les commentaires modérés pour un événement
router.get('/', (req, res) => {
  const { eventId } = req.query;
  const sql = `SELECT * FROM comments WHERE eventId = ? AND isModerated = 1`;
  db.query(sql, [eventId], (err, results) => {
    if (err) {
      console.error('❌ Erreur DB commentaires :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

// ✅ Ajouter un nouveau commentaire
router.post('/', (req, res) => {
  const { eventId, username, message } = req.body;
  const sql = `INSERT INTO comments (eventId, username, message, date, isModerated) VALUES (?, ?, ?, NOW(), 0)`;
  db.query(sql, [eventId, username, message], (err, result) => {
    if (err) {
      console.error('❌ Erreur ajout commentaire :', err);
      return res.status(500).json({ error: 'Erreur ajout' });
    }
    res.status(201).json({ success: true, id: result.insertId });
  });
});

// 🗑️ Supprimer un commentaire
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM comments WHERE id = ?`;
  db.query(sql, [id], (err) => {
    if (err) {
      console.error('❌ Erreur suppression :', err);
      return res.status(500).json({ error: 'Erreur suppression' });
    }
    res.status(200).json({ success: true });
  });
});

// ✅ Valider un commentaire
router.put('/:id/validate', (req, res) => {
  const { id } = req.params;
  const sql = `UPDATE comments SET isModerated = 1 WHERE id = ?`;
  db.query(sql, [id], (err) => {
    if (err) {
      console.error('❌ Erreur modération :', err);
      return res.status(500).json({ error: 'Erreur modération' });
    }
    res.status(200).json({ success: true });
  });
});

//  Récupérer tous les commentaires non modérés
router.get('/pending', (req, res) => {
  const sql = 'SELECT * FROM comments WHERE isModerated = 0';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Erreur DB modération :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

//  Valider un commentaire
router.put('/moderate/:id', (req, res) => {
  const commentId = req.params.id;
  const sql = 'UPDATE comments SET isModerated = 1 WHERE id = ?';
  db.query(sql, [commentId], (err, result) => {
    if (err) {
      console.error('❌ Erreur modération :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json({ success: true });
  });
});

// Supprimer un commentaire
router.delete('/:id', (req, res) => {
  const commentId = req.params.id;
  const sql = 'DELETE FROM comments WHERE id = ?';
  db.query(sql, [commentId], (err, result) => {
    if (err) {
      console.error('❌ Erreur suppression :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json({ success: true });
  });
});

module.exports = router;
