import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Details from './Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
