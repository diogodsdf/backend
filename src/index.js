const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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

//app.use(cors({origin: 'http://localhost:300'}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);