import React from "react";
import "./Form.css"

const Form = (props) => {
  return (
      <div className="form">
        <input value={props.query} onChange={props.handleNameChange} type="text" name="name" id="bookName" placeholder="TYPE HERE THE BOOK NAME"/>
        <button type="submit" onClick={props.handleFormSubmit} className="search-btn">SEARCH</button>
        </div>

  );
};

export default Form;


