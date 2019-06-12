import React, {Component} from 'react';
import Savedbook from '../Savedbook/Savedbook';
import './Savedlist.css'

class Savedlist extends Component {
    render() {
         
        return this.props.savedbooks.map((savedbook) => (
            <Savedbook savedbook={savedbook} delBook={this.props.delBook} />
        ))
    
    }
}

export default Savedlist;