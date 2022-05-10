import PostSummaryItem from "./post-summary-item";
import posts from './posts.json';

const PostSummaryList = () => {
    return(<div className="wb-suggested-posts">
                {
                    posts.map(post => {
                        return(
                            <PostSummaryItem post={post}/>
                        );
                    })
                }
            </div>)
}

export default PostSummaryList;