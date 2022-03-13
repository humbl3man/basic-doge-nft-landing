import Header from 'components/Header';
import Hero from 'components/Hero';
import './styles/global.css';

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
