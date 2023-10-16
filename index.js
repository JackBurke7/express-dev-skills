const express = require('express');
const app = express();
const skillsRoutes = require('./routes/skills'); 

app.get('/', (req, res) => {
    res.send('Welcome to My Express Application'); 
  });

app.use('/skills', skillsRoutes);
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
