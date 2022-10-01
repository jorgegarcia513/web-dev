import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="search-bar-box">
                <input type="text" placeholder="Search Tuiter" class="rounded search-bar">
                <img class="settings-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gear_icon-72a7cf.svg/1200px-Gear_icon-72a7cf.svg.png" width="20" height="20">
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                    <li class="class-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="class-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="class-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="class-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="class-item">
                        <a class="nav-link d-sm-none d-md-block d-lg-block" href="#">Entertainment</a>
                    </li>
           </ul>
           <div>
                <img class="border" src="https://media.wtsp.com/assets/WTSP/images/657c2b38-486d-467b-8f35-ba1014ff5c61/657c2b38-486d-467b-8f35-ba1014ff5c61.png" width="100%">
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
