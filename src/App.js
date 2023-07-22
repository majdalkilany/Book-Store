import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Rootlayout from './layout/Rootlayout';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  const router = createBrowserRouter((createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
    </Route>,

  )));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
