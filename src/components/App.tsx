import SaidBar from 'components/SaidBar/SaidBar';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suggestions } from './Suggestions/Suggestions';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SaidBar />}>
          <Route path="/suggestions" element={<Suggestions/>}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
