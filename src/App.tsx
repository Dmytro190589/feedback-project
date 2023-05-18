import SaidBar from 'components/SaidBar/SaidBar';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SaidBar />} />
      </Routes>
    </>
  );
};
export default App;
