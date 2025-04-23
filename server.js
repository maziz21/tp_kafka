const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/Message');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/kafka_messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('🟢 MongoDB connecté'))
  .catch(err => console.error('🔴 Erreur MongoDB', err));

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur API en écoute sur http://localhost:${PORT}`);
});
