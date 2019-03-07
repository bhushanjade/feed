import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'inputValue': this.props.inputValue || '',
        };
        this.changeInputField = this.changeInputField.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let value = nextProps.value;
        if (nextState !== this.state ||
            (value && !value.trim().length &&
            nextProps.required == 'required') ||
            (!value && nextProps.required == 'required')
        ) {
            return true;
        }
        return false;
    }

    changeInputField(event) {
        let value = event.target.value,
            inputName = this.props.name,
            eventPayload = {};

        eventPayload[inputName] = value;
        this.setState({
            inputValue: event.target.value,
        });

        if (typeof this.props.inputFieldEventHandler === 'function') {
            this.props.inputFieldEventHandler(eventPayload);
        }
    }

    render() {
        const {type, placeholder, name, value, className, inputFieldEventHandler, ...rest} = this.props;

        return <input {...rest}
                      type={type}
                      onChange={this.changeInputField}
                      className={classnames('form-control',
                          {[`${className}`]: !!className})}
                      placeholder={placeholder || null} name={name}
                      value={value} />;
    }
}

InputField.propTypes = {
    type: propTypes.string.isRequired,
    placeholder: propTypes.string,
    name: propTypes.string.isRequired,
    inputFieldEventHandler: propTypes.func.isRequired,
};
InputField.defaultProps = {
    type: 'text',
};
export default InputField;

