import axios from "axios";

export default  {
    //Gets books from Google Books API
    getBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query.toLowerCase().replace(/\s/g,''));
    },
    
    //Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    //Gets all books saved in DB
    getSavedBooks: function() {
        return axios.get("/api/books");
    },

    //Get a specific saved book by its id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    //Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
   
};








