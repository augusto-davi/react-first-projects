import PhotoColumn from './components/PhotoColumn';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PhotoColumn tag='Friends,happy' />
      <PhotoColumn tag='cuddle,gamer' />
      <PhotoColumn tag='playful,christmas,play' />
      <PhotoColumn tag='closeup,kiss,car' />
    </div>
  );
}

export default App;
