import React, {Component} from 'react';
import './Savedbook.css'

export class Savedbook extends Component {
    render() {
        const {_id, title, authors, description, image, link} = this.props.savedbook;
        return (
            <div className="row justify-content-aroud" key={_id}>
                <div className="col-lg-4 book-left-saved d-flex align-content-center flex-wrap"> 
                    <div className="divCoverName">
                        <div>
                            <img src={image} alt="book cover"></img>
                        </div>
                        <h5 className="title">{title}</h5>
                    </div>
                </div>
                <div className="col-lg-7 divSummary"> 
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                    <span>Author(s): </span>
                    { authors.map(author => (
                        <React.Fragment>
                            <span>{ author }</span>{ " " }
                        </React.Fragment>
                    ))}
                
                <div>
                    <a rel="noreferrer noopener" target="_blank" href={ link }>
                        <button className="googleBtn">Go to Google Books</button>
                    </a>
                    <button id = {_id} className = "deleteBtn" onClick={this.props.delBook.bind(this, _id)}>Delete</button>     
                </div>
                </div>
                
            </div>
        )
    }

}

export default Savedbook;

