import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css'

class List extends Component {
    render() {
         
        return this.props.books.map((book) => (
            <ListItem book={book} handleSaveButton={this.props.handleSaveButton} />
        ))
    
    }
}

export default List;