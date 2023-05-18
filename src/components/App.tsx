import Layout from 'components/Layout/Layout';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suggestions } from './Suggestions/Suggestions';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>BABABABBABABABA</div>}/>
          <Route path="/suggestions" element={<Suggestions/>}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
