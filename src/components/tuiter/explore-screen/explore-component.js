import PostSummaryList from "../post-summary-list/post-summary-list";

const ExploreComponent = () => {
    return(
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 main-feed">
                <div className="search-bar-box">
                    <input type="text" placeholder="Search Tuiter" className="rounded search-bar"/>
                    <img className="settings-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gear_icon-72a7cf.svg/1200px-Gear_icon-72a7cf.svg.png" width="20" height="20" alt=""/>
                </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="class-item">
                    <a className="nav-link active" href="#">For You</a>
                </li>
                <li className="class-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="class-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="class-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="class-item">
                    <a className="nav-link d-sm-none d-md-block d-lg-block" href="#">Entertainment</a>
                </li>
            </ul>
            <div>
                <img className="border" src="https://media.wtsp.com/assets/WTSP/images/657c2b38-486d-467b-8f35-ba1014ff5c61/657c2b38-486d-467b-8f35-ba1014ff5c61.png" width="100%" alt=""/>
            </div>
            {PostSummaryList()}
        </div>

    );
}
export default ExploreComponent;
