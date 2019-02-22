import React, { Component } from "react";
import Comments from "./Comments";

class CommentsDisplay extends Component {
  render() {
    const commentList = this.props.userComments.map((comment, i) => {
      return (
        <Comments
          name={comment.name}
          date={comment.date}
          text={comment.text}
          key={i}
        />
      );
    });

    return (
      <section className="CommentsDisplay">
        <div className="comment-input">
          <h4>3 Comments</h4>
          <span className="comment-header">JOIN THE CONVERSATION</span>
          <div className="comment-input__field">
            <img
              className="comment-profile"
              src={this.props.profilePicture}
              alt=""
            />
            <form className="comment-input__form">
              <input
                type="text"
                name="commentInput"
                placeholder="Write comment"
                className="comment-input"
              />
              <button className="comment-button" to="#">
                COMMENT
              </button>
            </form>
          </div>
        </div>
        <div className="comment-list">{commentList}</div>
      </section>
    );
  }
}

export default CommentsDisplay;
