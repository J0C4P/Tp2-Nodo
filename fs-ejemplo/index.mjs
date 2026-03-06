import fs from 'fs';

fs.writeFile('./data/example.txt', 'Nuevo Contenido', (err) => {
  if (err) throw err;
  console.log('Archivo creado!');
});


fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);
});

fs.rename('./data/example.txt', './data/example-renamed.txt', (err) => {
  if (err) throw err;
  console.log('Archivo renombrado!');
});