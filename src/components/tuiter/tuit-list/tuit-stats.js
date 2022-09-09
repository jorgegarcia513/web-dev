import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    console.log(tuit);
    return (
        <>
            <span className="mx-5">
                        <i className="fa fa-comment"> </i> {tuit.stats.comments}
            </span>

            <span onClick={likeTuit}>
            {
                tuit.liked &&
                <i className="fas fa-heart me-1"
                   style={{color: 'red'}}> </i>
            }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}


                <span className="mx-5">
                        <i className="fa fa-retweet"> </i> {tuit.stats.retuits}
                </span>
            </span>
        </>
    );
}
export default TuitStats;