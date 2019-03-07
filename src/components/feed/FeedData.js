import React, {Component} from "react";

import {connect} from "react-redux";
import {getFeedData} from "../../actions/feedAction";
import FeedTitle from './FeedTitle';
import FeedArticle from './FeedArticle';

/*
 * RSS feed API
 Sample feeds: https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/
 https://api.rss2json.com/v1/api.json?rss_url=https://aws.amazon.com/blogs/big-data/feed/
 * */
class FeedData extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     url: null,
        //     isLoading: true,
        //     hasError: false,
        //     id: null
        // }
    }


    componentDidMount() {
        this.props.getFeedData(this.props.urlDetails);
    }

    render() {
        if (this.props.isFetching) return <div>Loading...</div>
        if (this.props.hasError) return <div>{this.props.errorMsg}</div>

        if (this.props.isSuccess) return <div>
            <FeedTitle title={this.props.feed.title}/>
            {
                this.props.feedItems.map((article)=>{
                    return <FeedArticle article={article}/>
                })
            }
        </div>
        return null;
    }
}

const mapStateToProps = state => ({
    isFetching: state.feedReducer.isFetching,
    isSuccess: state.feedReducer.isSuccess,
    hasError: state.feedReducer.hasError,
    errorMsg: state.feedReducer.errorMsg,
    feedItems: state.feedReducer.feedItems,
    feed: state.feedReducer.feed
    /*
    *  isFetching: false,
     feedData: [],
     isSuccess: false,
     hasError: false,
     errorMsg: ""
    * */
});

export default connect(
    mapStateToProps,
    {getFeedData}
)(FeedData);