const express = require('express');
const connectDB = require('../config/db');
const mediaRoutes = require('../routes/mediaRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5006;

connectDB();

app.use(express.json());
app.use('/media', mediaRoutes);

app.listen(PORT, () => {
  console.log(`Media service running on port ${PORT}`);
});
