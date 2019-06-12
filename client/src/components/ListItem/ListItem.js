// import React, {Component} from 'react';
// import './ListItem.css'

// export class ListItem extends Component {
//     render() {
//         // const {id, title, authors, description, image, link} = this.props.book;
//         return (
//             <div key={this.props.book.id.toLowerCase()}>
//                 <h3>{ this.props.book.volumeInfo.title}</h3>
//                 <div>
//                     <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="book cover" style={{height: "100px"}}></img>
//                 </div>
//                 <div> 
//                     {this.props.book.volumeInfo.authors.map(author => (
//                         <p>{ author }</p>
//                     ))}
//                 </div>
//                     <p>{ this.props.book.volumeInfo.description }</p>
//                     <a rel="noreferrer noopener" target="_blank" href={ this.props.book.accessInfo.webReaderLink }>
//                         <button className="btn btn-dark">Go to Google Books</button>
//                     </a>
//                     <button id = { this.props.book.id.toLowerCase() } className = "btn btn-dark save-btn" onClick={this.props.handleSaveButton.bind(this, this.props.book.id)}>Save book </button>
//             </div>
//         )
//     }

// }

// export default ListItem;

import React, {Component} from 'react';
import './ListItem.css'

export class ListItem extends Component {
    render() {
        // const {id, title, authors, description, image, link} = this.props.book;
        return (
            <div className="row" key={this.props.book.id.toLowerCase()}>
                <div className="col-lg-4 divCoverName"> 
                
                <div className="coverContainer">
                    <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"></img>
                </div>
                <h3>{ this.props.book.volumeInfo.title}</h3>
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

