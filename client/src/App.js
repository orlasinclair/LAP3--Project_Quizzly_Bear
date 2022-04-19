import React from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Pages.Homepage />}>
                </Route>
                <Route path='/login' element={<Pages.Login />}>
                </Route>
                <Route path='/welcome' element={<Pages.LoggedIn />}>
                </Route>
                <Route path='/profile' element={<Pages.Profile />}>
                </Route>
                <Route path='/lobby' element={<Pages.Lobby />}>
                </Route>
                <Route path='/game' element={<Pages.CurrentGame />}>
                </Route>
            </Routes>
        </main>
    )
}

export default App;
