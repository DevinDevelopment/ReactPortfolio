// importing nav and outlet to allow us to use link tags
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
