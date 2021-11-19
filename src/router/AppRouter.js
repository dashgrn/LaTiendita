import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { BarNav } from '../components/BarNav'
import { Home } from '../components/Home'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <BarNav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}