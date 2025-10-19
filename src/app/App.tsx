import { Route, Routes } from 'react-router-dom';

import { Main } from '../pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
