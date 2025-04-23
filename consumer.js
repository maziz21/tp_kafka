const { Kafka } = require('kafkajs');
const mongoose = require('mongoose');
const Message = require('./models/Message');

mongoose.connect('mongodb://localhost:27017/kafka_messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('🟢 Connecté à MongoDB'))
  .catch(err => console.error('🔴 Erreur MongoDB', err));

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const msgValue = message.value.toString();
      console.log(`📩 Message reçu : ${msgValue}`);

      // Sauvegarde en base de données
      const newMessage = new Message({ value: msgValue });
      await newMessage.save();
    },
  });
};

run().catch(console.error);
