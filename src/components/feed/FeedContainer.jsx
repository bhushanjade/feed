import React, {Component} from 'react';

import FeedData from "./FeedData";

export default class FeedContainer extends Component {

    render() {
        let urlDetails = this.props.location.state.urlDetails;

        return <FeedData key={urlDetails.id} urlDetails={urlDetails}/>
    }

}
