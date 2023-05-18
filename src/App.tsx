import Overview from 'components/Pages/Overview';
import SideBar from 'components/SideBar/SideBar';
import { FC } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Routes>
        <SideBar />
        <Route path="/" element={<Overview />}></Route>
      </Routes>
    </>
  );
};
export default App;
