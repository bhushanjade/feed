import React, {Component} from 'react';
import classnames from 'classnames';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.inputValue || ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState({
            inputValue: value,
            // value: e.target.value
        });
        let inputName = this.props.name;
        let eventPayload = {};
        eventPayload[inputName] = value;
        if (typeof this.props['inputEventHandler'] === 'function') {
            this.props['inputEventHandler'](eventPayload);
        }
    }



    render() {
        let {inputValue} = this.state;
        const {type, placeholder, name, className, hasError, inputEventHandler, ...rest} = this.props;

        return <input {...rest} type={type} className={classnames([className, 'form-control'])} name={name}
                      onChange={this.handleChange} value={inputValue || ''}/>
    }
}


export default InputField;

