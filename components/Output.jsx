let React = require('react');
let marked = require('marked');

export default (props)=> (

    <div className="inline">
        <div className="output" dangerouslySetInnerHTML={{__html: marked(props.value, {sanitize: true})}}></div>
    </div>
);