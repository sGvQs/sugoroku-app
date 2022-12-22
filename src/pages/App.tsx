import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from '../pages/Game';
import { CharacterSelection } from './CharacterSelection';
import { Introduction } from './Introduction';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Introduction />} />
          <Route
            path={`/CharacterSelection`}
            element={<CharacterSelection />}
          />
          <Route path={`/GameStart`} element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
