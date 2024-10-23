const Diagnoser = require('./server/Diagnoser');
const express = require('express');
const homeFn = require('./server/homeFn');
const healthFn = require('./server/healthFn');
const path = require('path');


const app = express();
const database = require('./server/fbise9math_videoBlog');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the views directory
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
// Dummy data array
const diagnoser = new Diagnoser(database);
app.get('/', async (req, res) => {
  const data = await homeFn(diagnoser);
  // console.log(data);
  res.render('home', { data });
});

app.get('/health', async (req, res) => {
  const availableSlideTypes = ['TblStr' , 'Eqs' , 'grid' , 'canvas'];
  const availableCanvasItems = [
    'piechart',
'repeatText',
'repeatDot',
'icon',
'dot',
'angleSymbol',
'sprite',
'para',
'triangle',
'text',
'ellipse',
'ray',
'line',
'lines',
'rect',
'image',
'image2',
'circle',
  ];

  const data = await healthFn(diagnoser,availableSlideTypes,availableCanvasItems);
  const availableTcodes = [];

  // console.log(data);
  res.render('home', { data });
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});