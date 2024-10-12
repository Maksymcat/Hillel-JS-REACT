import { React, useState, createContext, useEffect } from "react";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Home from "../Home/Home";
import MyContext from "../../Context/context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
    const bebe = localStorage.getItem('theme')
  const [CurrentTheme, SetTheme] =  useState(bebe === 'true');
useEffect(() => {
    localStorage.setItem('theme', CurrentTheme)
    console.log({CurrentTheme})
}, [CurrentTheme])
  return (
    <>
      <MyContext.Provider value={CurrentTheme}>
        <div>
          <Router>
            <nav
              style={{
                background: CurrentTheme ? "Purple" : "white",
                height: "50px",
              }}
            >
              <ul style={{ display: "flex", gap: "15px", height: "50" }}>
                <li>
                  <button
                    onClick={() => {
                      SetTheme(!CurrentTheme)
            
                    }}
                  >
                    Змінити тему
                  </button>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/contacts"}>Contacts</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/about"}>About</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/contacts" exact Component={Contacts} />
              <Route path="/about" exact Component={About} />
            </Routes>
          </Router>
        </div>
      </MyContext.Provider>
    </>
  );
};

export default Header;
