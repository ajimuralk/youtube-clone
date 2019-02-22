import React, { Component } from 'react';

class Comments extends Component {

  render() {
    return (
      <div className="Comments">
        <div className="name-container"> 
            <div className="circle"> </div> 
            <p className="name">{this.props.name} </p>
            <p className="date">{this.props.date} </p>
        </div> 
        <p className="comment">{this.props.text} </p> 
      </div>
    )
  }
}

export default Comments;

