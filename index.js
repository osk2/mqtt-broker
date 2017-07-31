const mosca = require('mosca');
const log = require('./log');

const server = new mosca.Server({
  port: 1883,
  persistence: {
    factory: mosca.persistence.Memory
  }
});

server.on('ready', client => {
  log('info', 'MQTT server is ready');
});
server.on('clientConnected', client => {
  log('info', 'Client connected', client.id);
});
