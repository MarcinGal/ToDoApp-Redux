import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text, completed,onClick }) => (
    <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-throuth' : 'none'}}
    >
        {text}
    </li>
)

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
}

export default Todo