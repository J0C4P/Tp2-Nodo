import os from 'os';

console.log('Arquitectura:', os.arch());
console.log('Platforma:', os.platform());
console.log('Memoria total:', os.totalmem());
console.log('Memoria libre:', os.freemem());
console.log('Info CPUs:', os.cpus());