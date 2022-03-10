import React, {FC} from 'react';
import {ITodo} from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}


const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title} для пользователя {todo.userId}
        </div>
    );
};

export default TodoItem;