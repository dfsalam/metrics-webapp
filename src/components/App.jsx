import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Details from '../routes/Details';
import Home from '../routes/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:town" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
