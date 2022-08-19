import PhotoColumn from './components/PhotoColumn/PhotoColumn';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='columnsWrapper'>
        <PhotoColumn tag='Friends,happy' />
        <PhotoColumn tag='cuddle,gamer' />
        <PhotoColumn tag='playful,christmas,play' />
        <PhotoColumn tag='closeup,kiss,car' />
      </div>
    </div>
  );
}

export default App;
