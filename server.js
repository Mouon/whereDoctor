
const express = require('express');
const path = require('path');
import { performSearch } from './search';

const app = express();
const PORT = 8800;

app.use('/js', express.static(path.join(__dirname, 'public'), { 
  extensions: ['js'], 
  setHeaders: (res, filePath) => {
    res.set('Content-Type', 'application/javascript');
  },
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});


app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

app.get('/api/search', async (req, res) => {
  const { query } = req.query;

  try {
    // Perform the search using the function from search.js
    const results = await performSearch(query);
    res.json({ results });
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/message', (req, res) => {
  const message = 'This is a sample message from the API.';
  res.json({ message });
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
