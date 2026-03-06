import {EventEmitter} from 'events';

const emisor = new EventEmitter();
const nombre = 'José';


emisor.on('Saludo', (Nombre) => {
  console.log(`¡Hola, ${Nombre}!`);
});

emisor.emit('Saludo', nombre);