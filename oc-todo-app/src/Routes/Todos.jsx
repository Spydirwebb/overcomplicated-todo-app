import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
//import { v4 as uuidv4 } from "uuid";

import ToDoItem from "../Components/TodoItem";
import AddTodo from "../Components/AddTodo";

const Todos = () => {
    const { displayName, uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect({
        collection: `users/${uid}/todos`,
        storeAs: "todos",
    });
    const todos = useSelector((state) => state.firestore.data.todos);
    console.log(todos);
    
    return (
        <div>
            <h3>Hello {displayName}</h3>
            <h4>Todos</h4>
            <AddTodo />
            <ul
                style={{
                listStyleType: "none",
                }}
            >
                {todos &&
                Object.values(todos).map((todo) => (
                <li key={todo.todoId}>
                    <ToDoItem
                        title={todo.title}
                        isDone={todo.isDone}
                        todoID={todo.todoId}
                        key={todo.todoId}
                    />
                </li>
                ))}
        </ul>
    </div>
  );
};

export default Todos;