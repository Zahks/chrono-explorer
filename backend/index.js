const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connexion à MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'chrono_explorer'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Erreur connexion DB :', err);
  } else {
    console.log('✅ Connexion MySQL réussie !');
  }
});

// ICI : on déclare la route pour les events, avant de l’utiliser
const eventsRoutes = require('./routes/events');
app.use('/api/events', eventsRoutes);

//ICI: on déclare la route pour les commentaires, avant de l'utiliser 
const commentsRoutes = require('./routes/comments');
app.use('/api/comments', commentsRoutes);

//ICI: on déclare la route pour les utilisateurs, avant de l'utiliser 
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

//ICI: on déclare la route pour les medias, avant de l'utiliser
const mediaRoutes = require('./routes/media');
app.use('/api/media', mediaRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
