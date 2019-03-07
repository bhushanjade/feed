import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {validateToken} from '../actions/authentication';

class PrivateRoute extends React.Component {

    render() {
        const {component: Component, layout: Layout, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    <Layout component={Component} {...this.props} />
                }
            />
        );
    }
}

export default  PrivateRoute;
