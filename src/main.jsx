import ReactDOM from 'react-dom/client';
// imports to alloow routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

// imports for app and pages
import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/resumePage';

// defining route urls to their components 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <AboutPage />,
      },
      {
        index: true,
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// root component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
