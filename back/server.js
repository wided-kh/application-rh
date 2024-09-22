// server.js
const express = require('express');
const connectDB = require('./config/db'); // Assure-toi que le chemin est correct
const authRoutes = require('./routes/auth'); // Chemin des routes d'authentification
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Charger les variables d'environnement

connectDB(); // Connecter à la base de données MongoDB

const app = express();

// Middleware pour activer CORS et lire le JSON

app.use(cors({
    origin: 'http://localhost:3000' // L'adresse de ton frontend React
  }));
app.use(express.json()); 

// Définir les routes d'authentification
app.use('/api/auth', authRoutes);

// Définir le port et démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Vérifie que ce message apparaît
