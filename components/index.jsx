let React = require('react');
let ReactDOM = require('react-dom');

import MarkdownInput from './Input.jsx';
import MarkdownOutput from './Output.jsx';
import defaultObj from './defaults.jsx';

class MarkdownApp extends React.Component {

    constructor(props) {

        super(props);
        this.state = {value: defaultObj.value};

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {

        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <div className="container">
                <MarkdownInput value = {this.state.value} onchange = {this.onChange}/>
                <MarkdownOutput value = {this.state.value}/>
            </div>
        );
    }
}



ReactDOM.render(<MarkdownApp/>, document.getElementById('app'));