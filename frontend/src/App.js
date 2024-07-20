import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container } from '@mui/material';
import ProjectList from './Components/ProjectList';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Blogs from './Components/Blog';
import BlogDetail from './Components/BlogDetails';
import Contact from './Components/contactme';

function App() {
  return (
    <Router>
      <div>
        <header>
        <NavBar />
        </header>
        
        <main>
          <Container>
            <Routes>
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contactme" element={<Contact />} />
            </Routes>
          </Container>
        </main>
        
        <footer >
          <Footer />
        </footer> 
      </div>
    </Router>
  );
}

export default App;

