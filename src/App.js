import MainLayout from './main_layout.js';
import Quiz from './quiz/Quiz.js';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


function routerStructure() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={MainLayout} />
                    <Route exact path='/quiz' component={Quiz} />
                </Switch>
            </div>
        </Router>
    );
}

function App() {
    return (
        <div>
	       <div>
	  	        {routerStructure()}
	       </div>
        </div>
    );
}

export default App;
