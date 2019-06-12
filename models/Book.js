var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var BookSchema = new Schema({
  googleid: { 
    type: String,
    required: true },

  title: {
    type: String,
    required: true
  },
  
  authors: {
    type: Array,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
      type: String,
      required: true
  },

  link: {
      type: String,
      required: true
  }

});

var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
