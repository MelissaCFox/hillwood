import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './auth/Login';
import { Profile } from './profile/Profile';


export const ApplicationViews = () => {

    return (
        <>

        <BrowserRouter>

            <Routes>

                <Route exact path="/" element={<Login />} />

                <Route exact path="/profile" element={<Profile />} />


            </Routes>
        
        </BrowserRouter>


        </>
    )

}