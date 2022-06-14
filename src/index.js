import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friendly from './Components/Friendly';
import Tournament from './Components/Tournament';
import Teams from './Components/Teams';
import Submit from './Components/Submit';
import DetailsContextProvider from './Context/detailsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DetailsContextProvider>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />}></Route>
            <Route exact path="/page1" element={<App />}></Route>
            <Route exact path="/page2-friendly" element={<Friendly />}></Route>
            <Route exact path="/page2-tournament" element={<Tournament />}></Route>
            <Route exact path="/page3" element={<Teams />}></Route>
            <Route exact path="/submit" element={<Submit />}></Route>
          </Routes>
      </BrowserRouter>
    </DetailsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
