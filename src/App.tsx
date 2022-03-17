import Header from 'components/Header';
import Hero from 'components/Hero';
import { COLLECTION_URL } from 'config';

import './styles/global.css';

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main>
        <Hero collectionURL={COLLECTION_URL} />
      </main>
    </div>
  );
}

export default App;
