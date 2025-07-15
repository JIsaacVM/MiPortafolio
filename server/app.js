import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 80;

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, './dist')));

// Si quieres que al entrar a "/" cargue tu página principal (por ejemplo index.html), asegúrate de tener ese archivo dentro de /dist
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});


app.get('/porfolio_aidee', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor estático corriendo en http://localhost:${PORT}`);
});
