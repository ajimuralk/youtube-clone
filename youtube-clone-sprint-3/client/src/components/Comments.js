import React, { Component } from 'react';

const date = d => {
  return new Date(d).toLocaleDateString();
};

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <div className="name-container">
          <div className="circle"> </div>
          <p className="name">{this.props.name} </p>
          <p className="date">{date(this.props.timestamp)} </p>
        </div>
        <p className="comment">{this.props.comment} </p>
      </div>
    );
  }
}

export default Comments;
