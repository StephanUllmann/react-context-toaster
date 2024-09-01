import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
