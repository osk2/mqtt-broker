const mosca = require('mosca');
const log = require('./log');

const server = new mosca.Server({
  port: 1883,
  persistence: {
    factory: mosca.persistence.Memory
  }
});

const publishMessage = message => {
  server.publish(message, () => {
    log('info', 'Published message to ' + message.topic);
  });
}

server.on('ready', client => {
  log('info', 'MQTT server is ready');
});
server.on('clientConnected', client => {
  log('info', 'Client connected: ' + client.id);
});

server.on('published', (packet, client) => {
  log('info', 'Client ' + client + ' published: ' + packet);
});