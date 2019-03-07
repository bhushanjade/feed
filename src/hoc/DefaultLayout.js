import React, {Component} from 'react';

import {Route} from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import '../App.css';
const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="DefaultLayout">

                <Header {...rest} />

                <div className="left-sidebar">

                    <Sidebar {...rest} />
                </div>

                <div className="container">
                    <div className="container-fluid ">
                        <Component {...matchProps} />
                    </div>
                </div>
                {/*<div className="Footer">Footer</div>*/}
            </div>
        )}/>
    );
};

export default DefaultLayout;