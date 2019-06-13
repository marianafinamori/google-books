import React, {Component} from 'react';
import './ListItem.css'

export class ListItem extends Component {
    render() {
        // const {id, title, authors, description, image, link} = this.props.book;
        return (
            <div className="row justify-content-center" key={this.props.book.id.toLowerCase()}>
                <div className="col-lg-4 book-left d-flex align-content-center flex-wrap"> 
                <div className="divCoverName"> 
                
                <div className="coverContainer">
                    <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"></img>
                </div>
                <h5 className="title">{ this.props.book.volumeInfo.title}</h5>
                </div>
                </div>
                <div className="col-lg-7 divSummary"> 
                    <h3>{ this.props.book.volumeInfo.title}</h3>
                    <p className="authors">{ this.props.book.volumeInfo.description }</p>
                    <span>Author(s): </span>
                    {this.props.book.volumeInfo.authors.map(author => (
                         <React.Fragment> 
                        <span>{ author  }</span>{ ' ' }
                        </React.Fragment>
                    ))}
                
                <div> 
                    
                <a rel="noreferrer noopener" target="_blank" href={ this.props.book.accessInfo.webReaderLink }>
                        <button className="googleBtn">Go to Google Books</button>
                    </a>
                    <button id = { this.props.book.id.toLowerCase() } className = "saveBtn" onClick={this.props.handleSaveButton.bind(this, this.props.book.id)}>Save book </button>
                </div>
                </div>
                    
            </div>
        )
    }

}

export default ListItem;

