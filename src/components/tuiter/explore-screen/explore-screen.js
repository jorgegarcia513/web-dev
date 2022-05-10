import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../WhoToFollowList/who-to-follow-list";
const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>

                <ExploreComponent/>
            <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-sm-block d-lg-block rounded who-to-follow">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen;
