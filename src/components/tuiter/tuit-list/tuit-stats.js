import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <>
            <span className="mx-5">
                        <i className="fa fa-comment"> </i> {tuit.comments}
            </span>

            Likes: {tuit.likes}
            <i onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})}
               className="far fa-thumbs-up ms-2"/>


            <span className="mx-5">
                <i className="fa fa-retweet"> </i> {tuit.retuits}
            </span>
        </>
    );
}
export default TuitStats;