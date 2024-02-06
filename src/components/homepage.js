import Valentines from './valentines';
import HomepageContainer from './homepageContainer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Homepage() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomepageContainer/>}></Route>
            <Route path="/love" element={<Valentines/>}></Route>
        </Routes>
    </Router>
  );
}

export default Homepage;