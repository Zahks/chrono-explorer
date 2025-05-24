const express = require('express');
const router = express.Router();
const db = require('../db');

//  Inscription d’un utilisateur
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Champs requis manquants' });
  }

  const checkSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      console.error('Erreur SQL', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    const insertSql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(insertSql, [username, email, password], (err) => {
      if (err) {
        console.error('Erreur insertion utilisateur', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }

      res.status(201).json({ message: 'Utilisateur inscrit avec succès' });
    });
  });
});

// Connexion d’un utilisateur
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Erreur SQL', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const user = results[0];
    res.json({
      username: user.username,
      email: user.email
    });
  });
});

// Récupérer tous les utilisateurs (à des fins d'admin ou de test)
router.get('/', (req, res) => {
  const sql = 'SELECT id, username, email FROM users'; // On ne renvoie PAS les mots de passe
  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Erreur récupération utilisateurs :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});



module.exports = router;
