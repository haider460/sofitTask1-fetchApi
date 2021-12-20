import "./App.css";
import React from "react";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScrean";

import EmployeeDetails from "./component/EmployeeDetails";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main_container">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    {/* <Route path="/searchData" element={<Search />} /> */}
                    <Route
                        path="/viewDetail/:id"
                        element={<EmployeeDetails />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
