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
import ProjectListgames from './Components/ProjectList-Games';
import ProjectListWeb from './Components/ProjectList-Web';
import ProjectListRPA from './Components/ProjectList-RPA';
import ProjectListdt from './Components/ProjectList-DataScience';
import Resume from './Components/Resume';

function App() {
  return (
    <Router>
      <div>
        <header>
        <NavBar />
        </header>
        <main>
          <div>         
          <Container>
            <Routes>
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/projects/games" element={<ProjectListgames />} />
              <Route path="/projects/web" element={<ProjectListWeb />} />
              <Route path="/projects/RPA" element={<ProjectListRPA />} />
              <Route path="/projects/datascience" element={<ProjectListdt />} />
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contactme" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Container>
          </div>
        </main>
        
        <footer >
          <Footer />
        </footer> 
      </div>
    </Router>
  );
}

export default App;

