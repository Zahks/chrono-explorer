// backend/routes/events.js

const express = require('express');
const router = express.Router();
const db = require('../db'); //  Connexion MySQL partagée

//  Récupérer tous les événements
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM events';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Erreur lors de la récupération des événements :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

//  Rechercher des événements par titre, description ou date
router.get('/search', (req, res) => {
    console.log('🔍 Requête de recherche reçue avec :', req.query.q);
    
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Paramètre de recherche manquant' });
  }

  const sql = `
    SELECT * FROM events 
    WHERE title LIKE ? OR description LIKE ? OR date LIKE ?
  `;
  const term = `%${query}%`;

  db.query(sql, [term, term, term], (err, results) => {
    if (err) {
      console.error('❌ Erreur recherche :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    res.json(results);
  });
});

module.exports = router;
