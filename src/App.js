import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index.js";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen/explore-screen";
import Tuiter from "./components/tuiter/index.js";

import './vendors/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import './vendors/bootstrap-3.4.1-dist/bootstrap.min.css';
import './vendors/fontawesome-free-6.1.1-web/css/all.min.css'

import {BrowserRouter, Route, Routes}
    from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>

                            {/*<Route path="notifications"*/}
                            {/*       element={<NotificationScreen/>}/>*/}
                            ...
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;
