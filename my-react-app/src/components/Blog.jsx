import React from "react";

function Blog(props) {
    return (
    <div className="blog-container d-block d-lg-flex bg-light">

      <div className="blog">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href="blog/readmore"className="read-more">Read more</a>
      </div>

    </div>
    )
};

export default Blog;
