import React from 'react';
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";


const TuitListItem = ({tuit}) =>
{

    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
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
                <span className="user">{tuit.postedBy.username}</span>
                <i onClick={() => deleteTuit(tuit)} className="fas fa-remove fa-2x fa-pull-right"> </i><br/>
                <p className="wb-description">{tuit.tuit}</p>

                <TuitStats tuit={tuit}/>
            </td>
        </tr>
    );
}

export default TuitListItem;