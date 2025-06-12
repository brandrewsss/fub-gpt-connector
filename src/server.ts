import express from 'express';
import leadRoutes from './routes/lead.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use('/lead', leadRoutes);

app.listen(PORT, () => {
  console.log(`🚀 API listening on port ${PORT}`);
});
