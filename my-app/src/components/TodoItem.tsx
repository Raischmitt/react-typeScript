import React from "react";
import classes from './TodoItem.module.css';
import { classicNameResolver } from "typescript";

const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li className={classes.item}>{props.text}</li>
};

export default TodoItem;