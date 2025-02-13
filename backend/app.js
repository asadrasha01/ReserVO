const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
  res.send('Hello from ReserVO backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
