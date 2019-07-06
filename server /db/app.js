const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://papadopan:papadopan@cluster0-mvkmt.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);
