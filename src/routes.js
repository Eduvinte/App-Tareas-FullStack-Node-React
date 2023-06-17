// Imports
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Components
import InputTodo from './components/todos/post/InputTodo';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InputTodo />}/>
            </Routes>
        </BrowserRouter> 
    )
}

export default RoutesApp;