const mongoose = require('mongoose');
const Schema = mongoose.Schema;
​
const favoriteSchema = new Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
​
  },
    campsites: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'campsites'
    }]
  },
    {
      timestamps: true
    }
);
​
const Favorite = mongoose.model('Favorite', favoriteSchema);
​
module.exports = Favorite;