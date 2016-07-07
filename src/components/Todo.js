import React, { Component, PropTypes } from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Todo';
    }
    render() {
        return (
        	<li
        	   onClick = {this.props.onClick}
        	   style = {{
        	   	textDecoration: this.props.completed ? 'line-through':'none',
        	   	cursor: this.props.completed ? 'default' : 'pointer'
        	   }}>
        	   {this.props.text}
        	  </li>
        	);
    }
}

Todo.PropTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
};
export default Todo;
