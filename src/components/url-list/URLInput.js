/**
 * Created by bhushan on 26/2/19.
 */
import React, { Component } from 'react';
import InputField from '../common/InputField';
export default class URLInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
        <InputField type="text" name="urlInput" placeholder="Input RSS Feed URL" />
        </>);

    }
}