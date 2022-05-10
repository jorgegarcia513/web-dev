import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index.js";
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
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
