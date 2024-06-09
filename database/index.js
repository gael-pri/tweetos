const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gael:papiers@cluster0.ouqtj4b.mongodb.net/tweetos?retryWrites=true&w=majority&appName=Cluster0')
         .then(() => console.log('Connexion db ok !'))
         .catch( err => console.log(err));