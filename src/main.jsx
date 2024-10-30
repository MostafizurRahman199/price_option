import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact, { handleFormData } from './Components/Contact/Contact.jsx';
import Service from './Components/Service/Service.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/User/UserDetails.jsx';
import Posts from './Components/Post/Posts.jsx';
import PostDetails from './Components/Post/PostDetails.jsx';

// Define the router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home', // This will be accessible at '/home'
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        action: handleFormData,
        element: <Contact />,
      },
      {
        path: '/service',
        element: <Service />,
      },
      
      {
        path: '/users',
        loader: ()=>fetch('https://raw.githubusercontent.com/MostafizurRahman199/users_demo/refs/heads/main/users.json'),
        element: <User />,
      },
      {
        path: '/users/:id',
        loader: ()=>fetch('./users.json'),
        element: <UserDetails/>,
      },
      {
        path: '/posts/',
        loader: ()=>fetch('https://dummyjson.com/posts'),
        element: <Posts/>,
      },
      {
        path: '/posts/:id',
        loader: ({params})=>fetch(`https://dummyjson.com/posts/${params.id}`),
        element: <PostDetails/>,
      },
      {
        path: '/', // Default route
        element: <Home />, // This will render Home component at the root URL
      },
      { path: '*', element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Changed 'route' to 'router' */}
  </StrictMode>,
);
