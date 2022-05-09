import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from './who.js';
const WhoToFollowList = () => {
    return (`
            <table class="table">
                <thead>
                <th>
                    Who to follow
                </th>
                </thead>
                <tbody>
                    ${who.map(WhoToFollowListItem)}
                </tbody>
            </table>
`); }

export default WhoToFollowList;
