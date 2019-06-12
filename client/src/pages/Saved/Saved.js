import React, {Component} from "react";
import Savedlist from "../../components/Savedlist";
import API from "../../utils/API";
import './Saved.css'

class Saved extends Component {
    state = {
        savedbooks: []
    };

    componentDidMount() {
        this.getSavedBooks();
      }

  
    // Get books saved on mongoDB
    getSavedBooks = () => {
        API.getSavedBooks()
            .then((res) => {
                this.setState({ savedbooks: res.data });
            });
    }

    
    delBook = _id => {
        API.deleteBook(_id)
          .then(res => this.getSavedBooks())
          .catch(err => console.log(err));
      };
  
    render() {
        return (
            <div>
                <div className="container">
                    <Savedlist savedbooks={this.state.savedbooks} delBook={this.delBook} />
                </div>
            </div>
        );
    }
}

export default Saved;