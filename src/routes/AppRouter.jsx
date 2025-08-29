import {createBrowserRouter } from 'react-router-dom';
import Home from '@/components/pages/Home';
import Contact  from '@/components/pages/Contact';
import Blogs from '@/components/pages/Blogs';
import Courses from '@/components/pages/Courses';
import App from '@/App';
import Category from '@/components/pages/Category';

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {index:true, element: <Home />},
      {path:"/category", element: <Category />},
      {path:"/contact", element: <Contact />},
      {path:"/courses", element: <Courses />},
      {path:"/blogs", element: <Blogs />},
      { path: "*", element: <div>Page Not Found</div> }
    ],
  },
]);

export default AppRouter;