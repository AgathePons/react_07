// == Import
import { Routes, Route } from 'react-router-dom';

import './styles.scss';

import HeaderElement from 'src/components/HeaderElement';
import ReposPage from 'src/components/reposPage';
import FaqPage from 'src/components/FaqPage';
import NotFound from 'src/components/NotFound';

// == Composant
function App() {
  return (
    <div className="app">
      <main className="ui container">
        <HeaderElement />
        <Routes>
          <Route
            path="/"
            element={<ReposPage />}
          />
          <Route
            path="/faq"
            element={<FaqPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}

// == Export
export default App;
