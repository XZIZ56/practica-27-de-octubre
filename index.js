const { app, setupSOAP } = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
    setupSOAP(app);
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
