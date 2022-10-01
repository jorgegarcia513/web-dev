import React from 'react';
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../actions/tuits-actions";


const TuitListItem = ({tuit}) =>
{

    const dispatch = useDispatch();
    var videoLink;
    if (tuit.hasOwnProperty('attachments'))
    {
        videoLink = 'https://www.youtube.com/watch?v=' + tuit.attachments.video;
    }
    return(
        <tr className="p-3 bg-secondary rounded">
            <td className="tuit-list-entry">
                <img className= "me-1 rounded" src={tuit.avatar_image} width="20px" alt=""/>
                <span className="h5 topic">{tuit.topic} </span>
                <span className="user">{tuit.username}</span>
                <p className="wb-description">{tuit.tuit}</p>
                <TuitStats tuit={tuit}/>
            </td>
            <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
        </tr>
    );
}

export default TuitListItem;