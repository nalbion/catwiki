const path = require('path');
const express = require('express');
const {searchBreed, breedDetails, topTenBreeds} = require('./breed-service');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

/**
 * GET /api/breeds?name=ma
 */
app.get('/api/breeds', async (req, res) => {
  const results = await searchBreed(req.query.name)
  // TODO standardise response schema
  res.json(results);
});

app.get('/api/breeds/:breedId', async (req, res) => {
  const details = await breedDetails(req.params.breedId)
  // TODO standardise response schema
  res.json(details);
});

app.get('/api/top-10', async (req, res) => {
  const top10 = await topTenBreeds()
  // TODO standardise response schema
  res.json(top10);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
