import SaidBar from 'components/SaidBar/SaidBar';
import Overview from 'pages/Overview/Overview';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SaidBar />} />
        <Route path="/overview" element={<Overview />}></Route>
      </Routes>
    </>
  );
};
export default App;
