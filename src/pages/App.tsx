import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from '../pages/Game';
import { Entry } from '../pages/Entry';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Entry />} />
          <Route path={`/GameStart`} element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
