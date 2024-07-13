import React from 'react';
import { Container} from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PostDetails from './components/PostDetails/PostDetails';
import LandingPage from './components/Landing/landingPage';
import AdminHome from './admin/pages/adminhome/AdminHome';
import Login from "./admin/pages/login/Login"
import List from "./admin/pages/list/List";
import Single from "./admin/pages/single/Single";
import Listp from "./admin/pages/listp/Listp";
import Contact from './components/Landing/components/Contact/Contact';
import About from './components/Landing/components/Intro/Intro';
import "./admin/style/dark.scss";
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Chat from './components/Chat/Chat';

const App = () =>{
  const user = JSON.parse(localStorage.getItem('profile'));
  const PrivateRoute = ({ user, redirectTo, children }) => {
    return user ? children : <Navigate to={redirectTo} />;
  };
  
    return (
      <GoogleOAuthProvider
       clientId='130046574009-dnm5mece8p7nia55ehd39eritnkau1q8.apps.googleusercontent.com'
      >
      <BrowserRouter>
      <Container maxWidth="xl">
      <Navbar />
      <Routes>
      <Route path="/" element={<PrivateRoute user={user} redirectTo="/landing"><Navigate to="/posts" /></PrivateRoute>} />
        <Route path='/posts' element={<Home />}/>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/posts/search' element={<Home />}/>
        <Route path='/posts/:id' element={<PostDetails />}/>
        <Route path='/creators/:name' element={<CreatorOrTag />} />
        <Route path='/tags/:name' element={<CreatorOrTag />} />
        <Route path='/auth' element= {<Auth />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

        <Route path="/chat" element={<Chat />} />
        
        <Route path='/admin' element={<AdminHome />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/users" element={<List />} />
        <Route path="/admin/users/:userId" element={<Single />} />
        <Route path="/admin/posts" element={<Listp />} />
        <Route path="/admin/:postId" element={<Single />} />
            
      </Routes>
      </Container>
      </BrowserRouter>
      </GoogleOAuthProvider>
    );
}
export default App;