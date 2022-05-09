const PostSummaryItem = (post) => {
    return(`<div class="ps-2 pt-1 border wb-post wb-first-post">
                    <img class= "me-2 rounded wb-article-img wb-third-post-img" src=${post.img} width="100px">
                    <span class="wb-topic">${post.topic}</span><br/>
                    <span class="font-weight-bold wb-title">${post.userName}</span>
                    <span class="wb-date">* ${post.time}</span><br/>
                    <p class="wb-description">${post.title}</p>
                </div>`)
}

export default  PostSummaryItem;