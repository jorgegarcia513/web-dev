import React from 'react';

const PostSummaryItem = (
    {
        post = {
            topic: "Web Development",
            userName: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            image: "../../../images/react-blue.png"
        }
    }) => {
    return(<div className="ps-2 pt-1 wb-post wb-first-post">
                    <img className= "me-2 rounded wb-article-img float-right wb-third-post-img" src={post.image} width="100px" alt=""/>
                    <span className="wb-topic">{post.topic}</span><br/>
                    <span className="font-weight-bold wb-title">{post.userName}</span>
                    <span className="wb-date">* {post.time}</span><br/>
                    <p className="wb-description">{post.title}</p>
                </div>);
}

export default  PostSummaryItem;