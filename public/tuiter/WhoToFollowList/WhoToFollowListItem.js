const WhoToFollowListItem = (who) => {
    return(`
    <tr>
        <td class="who-to-follow-entry">
        <img class="me-1 rounded-circle who-to-follow-pfp"
             src=${who.avatarIcon} width="30" height="30">
            <span class="who-to-follow-name">${who.userName}</span>
            <i class="fa fa-check-circle"></i>
        <span class="who-to-follow-handle">@${who.handle}</span>
        <button type="button" class="btn btn-primary btn-sm mb-1 rounded-pill who-to-follow-button ">Follow</button>
        </td>
        </tr>
        `);
}

export default WhoToFollowListItem;