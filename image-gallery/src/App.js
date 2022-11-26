import './App.css';
import data from './backData/Data'
import ImageGallery from './components/ImageGallery';

function App() {
  const { allImages } = data;
  return (
    <div className="App">
         <strong><h2>Photographers Showcase</h2></strong>
         <ImageGallery  allImages = { allImages } />
    </div>
  );
}

export default App;
