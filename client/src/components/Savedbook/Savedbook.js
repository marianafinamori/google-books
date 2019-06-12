import React, {Component} from 'react';
import './Savedbook.css'

export class Savedbook extends Component {
    render() {
        const {_id, title, authors, description, image, link} = this.props.savedbook;
        return (
            <div key={_id}>
    
                                <h3>{title}</h3>
                                <div>
                                     <img src={image} alt="book cover" style={{height: "100px"}}></img>
                                </div>
                                <div> 
                                {authors.map(author => (
                                    <p>{ author }</p>
                                ))}
                                </div>
                                 
                                 <p>{ description }</p>
                                 <a rel="noreferrer noopener" target="_blank" href={ link }>
                                     <button className="btn btn-dark">Go to Google Books</button>
                                 </a>
                                 <button id = {_id} className = "btn btn-dark save-btn" onClick={this.props.delBook.bind(this, _id)}>Delete</button>
                
                 </div>
        )
    }

}

export default Savedbook;

