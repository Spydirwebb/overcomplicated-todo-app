import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const AddTodo = () => {
    const [presentTodo, setPresentTodo] = useState("");
    const firestore = useFirestore();
    const { uid } = useSelector((state) => state.firebase.auth);
    
    const handleChange = ({ currentTarget: { name, value } }) => {
        if(name === "addTodo") {
            setPresentTodo(value);
        }
    };

    const addNewTodo = (todo) => {
        firestore
            .collection("users")
            .doc(uid)
            .collection("todos")
            .add({
                title: todo,
                isDone: false,
            })
            .then((docRef) => {
                docRef.update({
                    todoId: docRef.id,
                });
            });
        setPresentTodo("");
    };
    
    return (
        <div>   
            <form action="">
                <input
                    type="text"
                    name="addTodo"
                    value={presentTodo}
                    onChange={(e) => handleChange(e)} 
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addNewTodo(presentTodo);
                    }} 
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;