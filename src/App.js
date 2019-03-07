import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './components/DashBoard';
import FeedContainer from './components/feed/FeedContainer';
import PrivateRoute from './hoc/PrivateRoute';
import DefaultLayout from './hoc/DefaultLayout';


class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Router>
                <div>
                    {/*<NavBar />*/}


                    <Switch>

                        <PrivateRoute exact path="/" component={Dashboard}
                                      layout={DefaultLayout}/>
                        {/*<Route exact path="/" component={Dashboard} />*/}

                        <PrivateRoute path="/feed/:feedId" layout={DefaultLayout} component={FeedContainer}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

const NoMatch = ({location}) => (
    <div>
        <h3>
            No match for <code>{location.pathName}</code>
        </h3>
    </div>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);
//
// const Login = () => (
//     <div>
//       <h2>Login
//
//       </h2>
//     </div>
// );
const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Create = () => (
    <div>
        <h2>Create</h2>
    </div>
);

export default App;