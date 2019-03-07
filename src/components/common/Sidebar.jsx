/**
 * Created by bhushan on 20/8/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { select, removeURL } from '../../actions/urlActions';
class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    removeUrl(url) {
        this.props.removeURL({url});
    }

    handleClick(url) {
        // alert('i m clicked');
        this.props.select({url});
    }

    render() {
        // console.log("sidebar", this.props);
        let {urlList, selectedURL} = this.props;
        // console.log(urlList);
        if (!urlList || urlList.length === 0) return <div>Insert URL in search...</div>;
        let defaultClassNames = 'feed-link-item';
        return <ul>{urlList.map(url => {
            return <li key={url.id}
                       className={selectedURL && selectedURL.id == url.id
                           ? defaultClassNames + ' selected'
                           : defaultClassNames}>
                <div >
                    <Link
                        to={{
                            pathname: '/feed/' + url.id,
                            state: {urlDetails: url},
                        }}
                        onClick={this.handleClick.bind(this, url)}
                        /*to={`./feed/${url.id}`}*/>

                        {url.url}


                    </Link>
                    <span className="feed-link-close-btn"
                          onClick={this.removeUrl.bind(this, url)}>X</span>
                </div>

            </li>;
        })
        }
        </ul>;
    }
}

const mapStateToProps = (state) => ({
    urlList: state.urlReducer.urlList,
    selectedURL: state.urlReducer.selectedURL,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {select, removeURL}),
)(Sidebar);


