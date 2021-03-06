import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AddTodo';
    }
    render() {
        return (
        	<div>
	        	<input type='text' ref='input'/>
	        	<button onClick={e => this.handleClick(e)}>
	        		Add
	        	</button>
        	</div>
        	);
    }

    handleClick(e) {
    	const node = findDOMNode(this.refs.input);
    	const text = node.value.trim();
    	this.props.onAddClick(text);
    	node.value = '';
    }
}
AddTodo.PropTypes = {
	onAddClick: PropTypes.func.isRequired
}

export default AddTodo;
