import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Details from './Details';
import Home from '../routes/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
