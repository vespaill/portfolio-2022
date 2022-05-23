import React from 'React';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe';
// import ProjectList from './components/projectList';
// import NotFound from './components/common/notFound';
// import Footer from './components/footer';

export const App = () => (
   <BrowserRouter>
      <NavBar />
      <main className="container">
         <Routes>
            <Route path="/aboutme" component={AboutMe} />
            {/* <Route path="/projects" component={ProjectList} /> */}
            {/* <Route path="/strength" component={StrengthTraining} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/aboutme" />
            <Redirect to="/not-found" /> */}
         </Routes>
      </main>
      {/* <Footer /> */}
   </BrowserRouter>
);
