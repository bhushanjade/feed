/**
 * Created by bhushan on 20/8/18.
 */
import React, {Component} from 'react';
import SearchField from '../SearchField';

class Header extends Component {

    render() {

        return (
            <div className="feed-search">
                <SearchField/>
            </div>
        );
    }
}

export default Header;


