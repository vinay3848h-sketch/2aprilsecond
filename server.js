const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '/'))); // serve files from repo root
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
