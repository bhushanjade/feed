import React, {Component} from "react";

import InputField from "./InputField";

import {connect} from "react-redux";
import {add} from "../actions/urlActions";

// import validURL from '../helpers/validURL';


class SearchField extends Component {
    constructor(props) {
        super(props);
        this.urlInputHandler = this.urlInputHandler.bind(this);
        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
        this.state = {
            // url: null,
            // urlList: [],
            // selectedURL: null
        };
    }


    handleUrlSubmit() {
        let url = this.state.url;
        this.setState({
            url: null
        });
        // if (validURL(url)) {
        this.props.add({
            url: url,
            id: Date.now()
        });
        // this.setState({
        //     url: null
        // });
        // this.setState({
        //     url: null
        // });
        /* } else {
             alert("Invalid URL");
         }*/
    }

    urlInputHandler(value) {
        // console.log(value);
        this.setState({
            url: value.url
        });
    }

    hasURLs() {
        return this.props.urlList.length > 0;
    }

    render() {

        return (
            <>
                <InputField ref="someName"
                            name="url"
                            value={this.state.url}
                            inputEventHandler={this.urlInputHandler} className="feed-search-input"
                />
                <button className="feed-search-button" value="Search" onClick={this.handleUrlSubmit}>
                    Search
                </button>
                {/*{*/}
                {/*this.hasURLs() ?*/}
                {/*<>*/}
                {/*<Sidebar urlList={this.props.urlList} selected={this.props.selectedURL.id}/>*/}
                {/*<FeedData selected={this.props.selectedURL}/>*/}
                {/*</>*/}
                {/*: <div> Add URLs</div>*/}
                {/*}*/}
            </>
        );
    }
}

const mapStateToProps = state => ({
    urlList: state.urlReducer.urlList,
    selectedURL: state.urlReducer.selectedURL,
    url: state.urlReducer.url

    //errors: state.errors
});

export default connect(
    mapStateToProps,
    {add}
)(SearchField);
