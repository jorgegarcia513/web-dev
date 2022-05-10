import React from 'react';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
    <tr>
        <td className="who-to-follow-entry">
        <img className="me-1 rounded-circle who-to-follow-pfp"
             src={who.avatarIcon} width="30" height="30"/>
            <span className="who-to-follow-name">{who.userName}</span>
            <i className="fa fa-check-circle"></i>
        <span className="who-to-follow-handle">@{who.handle}</span>
        <button type="button" className="btn btn-primary btn-sm mb-1 rounded-pill float-right who-to-follow-button ">Follow</button>
        </td>
        </tr>
        );
}

export default WhoToFollowListItem;