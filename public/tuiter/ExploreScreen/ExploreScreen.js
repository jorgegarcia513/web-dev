import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 main-feed">
            ${ExploreComponent()}
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-sm-block d-lg-block border rounded who-to-follow">

            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
