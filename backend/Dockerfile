# Utilise une image Node officielle
FROM node:18

# Dossier de travail
WORKDIR /app

# Copie du code
COPY ./backend/ ./

# Installe les dépendances
RUN npm install

# Le port exposé
EXPOSE 3000

# Lance l'app
CMD ["node", "index.js"]
