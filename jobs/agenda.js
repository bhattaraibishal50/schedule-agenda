
const Agenda = require('agenda');
const mongoConnectionString = process.env.MONGO_URI;
const agenda = new Agenda({ db: { address: mongoConnectionString, collection: 'jobs' } });

// Start Agenda and ensure it connects successfully
agenda.on('ready', () => {
  console.log('Agenda connected to MongoDB');
  agenda.start();
});

// Graceful shutdown handling for Agenda
process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...');
  await agenda.stop();
  process.exit(0);
});

module.exports = agenda;





