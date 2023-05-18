import SaidBar from 'components/SaidBar/SaidBar';
import Home from 'pages/Home/Home';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SaidBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
