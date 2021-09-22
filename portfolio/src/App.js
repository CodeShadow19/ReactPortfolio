import React from 'react'
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutMe from "./pages/AboutMe";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import RefundPage from "./pages/RefundPage";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./Router/AppRoute";


function App() {
  return (
    <div>
        <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
