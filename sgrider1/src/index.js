import React, { Component } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="It's so cold today!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:45PM"
          comment="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 6:00PM"
          comment="Awesome"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
