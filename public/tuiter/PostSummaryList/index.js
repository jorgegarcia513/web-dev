import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`<div class="wb-suggested-posts">
                ${posts.map(PostSummaryItem)}
            </div>`)
}

export default PostSummaryList;