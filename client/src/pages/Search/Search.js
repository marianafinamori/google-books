import React, {Component} from "react";
import List from "../../components/List";
// import ListItem from "../../components/ListItem"
import API from "../../utils/API";
import Form from '../../components/Form';
import './Search.css'

class Search extends Component {
    state = {
        query: "",
        books: [],
        results: [],
        error: "",
    };

    // Get books saved on mongoDB
    getSavedBooks = () => {
        API.getSavedBooks()
            .then((res) => {
                this.setState({ savedbooks: res.data });
            });
    }

    // Get input change
    handleNameChange = (event) => {
        this.setState({ query: event.target.value });
    }


    handleSaveButton = (id) => {
        this.setState({ books: this.state.books.map(book => {
            if(book.id === id) {
                const bookData = {}
                bookData.id=book.id
                bookData.title=book.volumeInfo.title
                bookData.authors=book.volumeInfo.authors
                bookData.description=book.volumeInfo.description
                bookData.image=book.volumeInfo.imageLinks.smallThumbnail
                bookData.link=book.accessInfo.webReaderLink
                console.log(bookData)
                // console.log(id)
                API.saveBook(bookData).then(res=> this.getSavedBooks())
            }
            return book;
        })})
        
    }
  
    // Search for a book on Google Books API
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Getting Books");
        console.log("this.state.query: ", this.state.query);
        API.getBooks(this.state.query)
            .then((res) => {
                this.setState({ books: res.data.items });
                console.log("this.state.books: ", this.state.books);
            });

    };

    render() {
        return (
            <div>

                <div>
                                <Form 
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleNameChange={this.handleNameChange} />
                                <List books={this.state.books} handleSaveButton={this.handleSaveButton} />
                </div>
            </div>
        );
    }
}

export default Search;
