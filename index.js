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

const resolveClient = client => {
  let identity = '';

  if (client) {
    return 'Client ' + client.id;
  }
  return 'Unknown client';
}

server.on('ready', client => {
  log('info', 'MQTT server is ready');
});
server.on('clientConnected', client => {
  log('info', 'Client connected: ' + resolveClient(client));
});

server.on('published', (packet, client) => {
  log('info', resolveClient(client) + ' published to ' + packet.topic);
});
