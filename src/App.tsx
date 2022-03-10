import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';

import UserPage from './components/UserPage';
import TodoPage from './components/TodosPage';
import Home from './components/Home';
import NotFound from './components/NotFound';
import UserItemsPage from './components/UserItemsPage';

const App = () => {
    return (
        <div>
            <header style={{display: 'flex', justifyContent: 'space-around', margin: 40}}>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/todos'>Todos</Link>
            </header>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/todos'} element={<TodoPage/>}/>
                <Route path={'/users/:id'} element={<UserItemsPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;

