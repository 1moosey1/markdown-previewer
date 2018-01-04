let React = require('react');

export default (props)=> (

    <div className="inline">
        <textarea className="input" defaultValue={props.value} onChange={props.onchange}></textarea>
    </div>
);