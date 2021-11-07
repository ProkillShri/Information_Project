const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact-me.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  res.redirect('/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});