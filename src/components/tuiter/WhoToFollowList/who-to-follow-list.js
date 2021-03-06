import React from 'react'
import WhoToFollowListItem from "./who-to-follow-list-item";
import who from './who.json';

const WhoToFollowList = () => {
    return (
        <div>
            <table className="table">
                    <thead>
                    {/*<p>Who to follow</p>*/}
                    </thead>
                    <tbody>
                        {
                            who.map(who => {
                                 return(
                                     <WhoToFollowListItem who={who}/>
                                 );
                             })
                        }

                    </tbody>
                </table>
        </div>
);
}

export default WhoToFollowList;