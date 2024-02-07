import Valentines from './valentines';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Homepage() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Valentines/>}></Route>
        </Routes>
    </Router>
  );
}

export default Homepage;