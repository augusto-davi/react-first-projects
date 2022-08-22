import PhotoColumn from './components/PhotoColumn/PhotoColumn';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='columnsWrapper'>
        <PhotoColumn tag='christmas' />
        <PhotoColumn tag='cuddle' />
        <PhotoColumn tag='Friends' />
        <PhotoColumn tag='closeup' />
      </div>
    </div>
  );
}

export default App;
