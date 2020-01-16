const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb+srv://diogodsdf:diogodsdf@cluster0-muur2.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);