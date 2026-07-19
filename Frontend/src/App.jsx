import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/login";
import { Register } from "./Pages/register";
import { Layout } from "./Pages/layout";
import { Main } from "./Pages/main";
import { Dashboard } from "./Pages/dashboard";

function App() {
return (
    <Router>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            
        </Routes>
    </Router>
)   
}

export default App;
