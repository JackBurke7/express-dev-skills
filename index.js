const express = require('express');
const app = express();
const skillsRoutes = require('./routes/skills'); 

app.get('/', (req, res) => {
    res.send('Welcome to My Express Application'); 
  });

app.use('/skills', skillsRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
