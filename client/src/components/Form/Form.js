import React from "react";
import "./Form.css"

const Form = (props) => {
  return (
      <div>
        <h2>Search books</h2>
        <input value={props.query} onChange={props.handleNameChange} type="text" name="name" id="bookName" placeholder="Type here the book name"/>
        <button type="submit" onClick={props.handleFormSubmit} className="btn search-btn">Search</button>
        </div>

  );
};

export default Form;


