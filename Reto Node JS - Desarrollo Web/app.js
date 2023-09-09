const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Configurar Multer para almacenar archivos en /public/uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/formulario.html'));
});

app.post('/submit-form', upload.single('archivoDPI'), (req, res) => {
  const { nombre, email } = req.body;
  const archivoDPI = req.file ? req.file.filename : null;

  const contacto = { nombre, email, archivoDPI };

  // Almacenar en JSON (puedes usar fs.writeFileSync o base de datos)
  const data = fs.readFileSync('contactos.json', 'utf8');
  const contactos = JSON.parse(data);
  contactos.push(contacto);
  fs.writeFileSync('contactos.json', JSON.stringify(contactos));

  res.redirect('/archivos');
});

app.get('/archivos', (req, res) => {
  const data = fs.readFileSync('contactos.json', 'utf8');
  const contactos = JSON.parse(data);
  res.render(path.join(__dirname, '/views/archivos.html'), { contactos });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
