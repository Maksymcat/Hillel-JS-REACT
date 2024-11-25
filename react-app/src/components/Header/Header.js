import React from "react";
import Todos from "../Todos/Todos";

import Home from "../Home/Home";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import {Link as RouterLink} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Link from '@mui/joy/Link'; 
import Swapi from "../Swapi/Swapi";
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Person from '@mui/icons-material/Person';

const Header = () => {
  return (
    <>
<div className="main">
      <div className="container">
        
        <Router>
          
        <List   role="menubar" orientation="horizontal">
     
        <RouterLink  to="/">
        <ListItem  role="none">
          <ListItemButton
         
          color="neutral"
          variant="soft"
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
        bebebe
          </ListItemButton>
        </ListItem>
        </RouterLink>
        <ListDivider />
        <RouterLink to="/todos"><ListItem role="none">
          <ListItemButton   color="neutral"
          variant="soft" role="menuitem" component="a" href="#horizontal-list">
            Todos
          </ListItemButton>
        </ListItem>
        </RouterLink>
        <ListDivider />
        <RouterLink to="/swapi"><ListItem role="none">
          
          <ListItemButton   color="neutral"
          variant="soft" role="menuitem" component="a" href="#horizontal-list">
            Swapi
          </ListItemButton>
        </ListItem>
        </RouterLink>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
       
          </ListItemButton>
        </ListItem>
    
      </List>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/swapi" element={<Swapi />} />
          </Routes>
     
         
        </Router>
      
  </div>
  <footer className="footer">
                 <div className="footer_container">
                 <Link
               color="neutral"
               level="h4"
               underline="hover"
               variant="outlined"
             > <a href="https://github.com/Maksymcat">Github</a></Link>
                   <Link
               color="neutral"
               level="h4"
               underline="hover"
               variant="outlined"
             > <a href="linkedin.com">Linkedin</a></Link>
             <Link
               color="neutral"
               level="h4"
               underline="hover"
               variant="outlined"
             > <a href="https://t.me/makssmk">Telegram</a></Link>
             
             </div>
               </footer>
  </div>
    </>
  );
};

export default Header;